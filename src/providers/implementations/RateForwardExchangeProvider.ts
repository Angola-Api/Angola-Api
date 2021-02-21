import { RateForwardExchange } from "../../entities/RateForwardExchange";
import { Puppeteer } from "../../services/Puppeteer";
import { IRateForwardExchangeProvider } from "../IRateForwardExchangeProvider";

export class RateForwardExchangeProvider implements IRateForwardExchangeProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
  async getRateForwardExchange(): Promise<RateForwardExchange> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto("https://www.bna.ao/");
    const rates = await this.extractData();
    await this.puppeteer.browser.close();
    return rates;
  }

  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
      const nodeSelectArrayRates = document.querySelectorAll(
        "div#collapsetaxas.BNA-body-mod.collapse tbody"
      );

      const nodeArrayTable = [...nodeSelectArrayRates];

      let rates = [].slice.call(nodeArrayTable[1].children).map((children) => ({
        maturity: (children.children[0] as HTMLElement).innerText,
        rate: parseFloat((children.children[1] as HTMLElement).innerText),
      }));
      rates.shift();
      return {
        rates
      };
    });
  }
}
