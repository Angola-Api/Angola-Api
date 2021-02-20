import { TaxaBna } from "../../entities/TaxaBna";
import { Puppeteer } from "../../services/Puppeteer";
import { ITaxaBnaProvider } from "../ITaxaBnaProvider";

export class TaxaBnaProvider implements ITaxaBnaProvider {
  constructor(private puppeteer: Puppeteer) {}

  async getTaxaBna(): Promise<TaxaBna> {
    await this.puppeteer.page.goto("https://www.bna.ao/");
    const taxa_bna = this.extractData();
    await this.puppeteer.browser.close();
    return taxa_bna;
  }
  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
      const nodeSelect = document.getElementsByClassName(
        "BNA-body-mod collapse table"
      );
      const nodeArray = [...nodeSelect];
      const taxa_juro = (nodeArray[0].children[0].children[0].children[0].children[1] as HTMLElement).innerText
      return taxa_juro;
    });
  }
}
