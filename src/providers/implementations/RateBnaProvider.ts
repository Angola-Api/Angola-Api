import { RateBna } from "../../entities/RateBna";
import { Puppeteer } from "../../services/Puppeteer";
import { IRateBnaProvider } from "../IRateBnaProvider";

export class RateBnaProvider implements IRateBnaProvider {
  private puppeteer: Puppeteer;
  constructor() {
    this.puppeteer = new Puppeteer();
  }
  async getRateBna(): Promise<RateBna> {
    await this.puppeteer.initialize();
    await this.puppeteer.page.goto("https://www.bna.ao/");
    const rate = await this.extractData();
    await this.puppeteer.browser.close();
    return {
      rate,
    };
  }
  private async extractData() {
    return await this.puppeteer.page.evaluate(() => {
      const nodeSelect = document.getElementsByClassName(
        "BNA-body-mod collapse table"
      );
      const nodeArray = [...nodeSelect];
      const rate_interest = (nodeArray[0].children[0].children[0].children[0]
        .children[1] as HTMLElement).innerText;
      return rate_interest.replace("\n", "");
    });
  }
}
