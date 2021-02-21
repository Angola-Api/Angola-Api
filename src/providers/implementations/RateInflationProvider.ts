import { RateInflation } from "../../entities/RateInflation";
import { IPuppeteer } from "../../services/IPuppeteer";
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
     
    });
  }
}
