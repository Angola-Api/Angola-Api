import { RateBna } from "../../entities/RateBna";
import { Puppeteer } from "../../services/Puppeteer";
import { IRateBnaProvider } from "../IRateBnaProvider";

export class RateBnaProvider implements IRateBnaProvider {

  constructor( private puppeteer: Puppeteer){}
  async getRateBna(): Promise<RateBna> {
    await this.puppeteer.openBrowser("https://www.bna.ao/");
    const rate = await this.puppeteer.extractData(this.navigate)
    await this.puppeteer.closeBrowser();
    return {
      rate,
    };
  }
  
  private navigate(){
    const nodeSelect = document.getElementsByClassName(
      "BNA-body-mod collapse table"
    );
    const nodeArray = [...nodeSelect];
    const rate_interest = (nodeArray[0].children[0].children[0].children[0]
      .children[1] as HTMLElement).innerText;
    return rate_interest.replace("\n", "");
  } 
 
}
