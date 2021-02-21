import { TaxaLuibor } from "../../entities/TaxaLuibor";
import { Puppeteer } from "../../services/Puppeteer";
import { ITaxasLuiborProvider } from "../ITaxasLuiborProvider";

export class TaxasLuiborProvider implements ITaxasLuiborProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
  async getTaxasLuibor(): Promise<TaxaLuibor[]> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto(
      "https://www.bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=378&idi=380&idl=1"
    );
    const taxas = await this.extractData();
    await this.puppeteer.browser.close();
    return taxas;
  }

  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
      const nodeSelectData = document.getElementsByClassName("BNA-data");
      const nodeSelectArrayTaxas = document.querySelectorAll(
        "div.panel-body table tbody"
      );
      
      const nodeArrayData = [...nodeSelectData];
      const nodeArrayTable = [...nodeSelectArrayTaxas];
      
      let taxas =  ([].slice.call(nodeArrayTable[0].children)).map((children) => ({
        maturidade : (children.children[0] as HTMLElement).innerText,
        taxa: (children.children[1] as HTMLElement).innerText,
      }) );
      taxas.shift();
      return {
        date: (nodeArrayData[0] as HTMLElement).innerText,
        taxas
      };
    });
  }
}
