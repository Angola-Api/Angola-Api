import { RateBna } from "../../entities/RateBna";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateBnaProvider } from "../IRateBnaProvider";

export class RateBnaProvider implements IRateBnaProvider {
  constructor(private puppeteer: IPuppeteer) {}

  async getRateBna(): Promise<RateBna> {
    const rate = await this.puppeteer.extractData(
      "https://www.bna.ao/",
      this.navigate
    );
    return rate;

  }

  private navigate() {
    const nodeSelect = document.getElementsByClassName(
      "BNA-body-mod collapse table"
    );
    const nodeArray = [...nodeSelect];
    let rate= (nodeArray[0].children[0].children[0].children[0]
      .children[1] as HTMLElement).innerText;
    rate = rate.replace("\n", "")
    return {
      rate
    }
  }
}
