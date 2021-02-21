import { RateExchange } from "../../entities/RateExchange";
import { Puppeteer } from "../../services/Puppeteer";
import { IRateExchangeProvider } from "../IRateExchangeProvider";

export class RateExchangeProvider implements IRateExchangeProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
  async getRateExchange(): Promise<RateExchange> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto("https://www.bna.ao/");
    const rates = await this.extractData();
    await this.puppeteer.browser.close();
    return rates;
  }

  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
     
    });
  }
}
