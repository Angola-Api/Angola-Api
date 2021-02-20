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
      const nodeSelectData = document.getElementsByClassName(
        "BNA-data"
      );
      const nodeArrayData = [...nodeSelectData];
      const taxas = {
        date: (nodeArrayData[0] as HTMLElement).innerText,

      }  
      return taxas;
    });
  }
}
