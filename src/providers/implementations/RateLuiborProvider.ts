import { RateLuibor } from "../../entities/RateLuibor";
import { IPuppeteer } from "../../services/IPuppeteer";
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
      
    });
  }
}
