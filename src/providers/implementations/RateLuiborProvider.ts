import { RateLuibor } from "../../entities/RateLuibor";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateLuiborProvider } from "../IRateLuiborProvider";

export class RateLuiborProvider implements IRateLuiborProvider {

  constructor(private puppeteer: IPuppeteer) {}
  
  async getRateLuibor(): Promise<RateLuibor> {
    return await this.puppeteer.extractData();
  }

}
