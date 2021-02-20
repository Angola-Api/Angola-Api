import { TaxaBna } from "../../entities/TaxaBna";
import { Puppeteer } from "../../services/Puppeteer";
import { ITaxaBnaProvider } from "../ITaxaBnaProvider";

export class TaxaBnaProvider implements ITaxaBnaProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
  async getTaxaBna(): Promise<TaxaBna> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto("https://www.bna.ao/");
    const taxa = await this.extractData();
    await this.puppeteer.browser.close();
    return {
      taxa,
    };
  }
  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
      const nodeSelect = document.getElementsByClassName(
        "BNA-body-mod collapse table"
      );
      const nodeArray = [...nodeSelect];
      const taxa_juro = (nodeArray[0].children[0].children[0].children[0]
        .children[1] as HTMLElement).innerText;
      return taxa_juro.replace("\n", "");
    });
  }
}
