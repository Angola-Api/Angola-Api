import { RateLuibor } from "../../entities/RateLuibor";
import { Puppeteer } from "../../services/Puppeteer";
import { IRateLuiborProvider } from "../IRateLuiborProvider";

export class RateLuiborProvider implements IRateLuiborProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
  async getRateLuibor(): Promise<RateLuibor> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto(
      "https://www.bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=378&idi=380&idl=1"
    );
    const rates = await this.extractData();
    await this.puppeteer.browser.close();
    return rates;
  }

  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
      const nodeSelectData = document.getElementsByClassName("BNA-data");
      const nodeSelectArrayRates = document.querySelectorAll(
        "div.panel-body table tbody"
      );
      
      const nodeArrayData = [...nodeSelectData];
      const nodeArrayTable = [...nodeSelectArrayRates];
      
      let rates =  ([].slice.call(nodeArrayTable[0].children)).map((children) => ({
        maturity : (children.children[0] as HTMLElement).innerText,
        rate: (children.children[1] as HTMLElement).innerText,
      }) );
      rates.shift();
      return {
        date: (nodeArrayData[0] as HTMLElement).innerText,
        rates
      };
    });
  }
}
