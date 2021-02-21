import { RateInflation } from "../../entities/RateInflation";
import { Puppeteer } from "../../services/Puppeteer";
import { IRateInflationProvider } from "../IRateInflationProvider";

export class RateInflationProvider implements IRateInflationProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
   async getRateInflation(): Promise<RateInflation> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto(
      "https://www.bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=1017&idi=1018&idl=1"
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
        type : (children.children[0] as HTMLElement).innerText,
        rate: (children.children[1] as HTMLElement).innerText,
      }) );
      let status = rates[0].tipo;
      rates.shift();
      return {
        date: (nodeArrayData[0] as HTMLElement).innerText,
        status,
        rates
      };
    });
  }
}
