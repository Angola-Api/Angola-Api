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
      const nodeSelectArrayRates = document.querySelectorAll(
        "div#collapsecambios.collapse table tbody"
      );

      const nodeArrayTable = [...nodeSelectArrayRates];

      let rates = [].slice.call(nodeArrayTable[0].children).map((children) => ({
        currency: (children.children[0] as HTMLElement).innerText,
        rate: (children.children[1] as HTMLElement).innerText,
      }));
      rates.shift();
      return {
        rates
      };
    });
  }
}
