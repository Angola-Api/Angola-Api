import { RateBna } from "../../entities/RateBna";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateBnaProvider } from "../IRateBnaProvider";

export class RateBnaProvider implements IRateBnaProvider {
  constructor(private puppeteer: IPuppeteer) {}

  async getRateBna(): Promise<RateBna> {
    return await this.puppeteer.extractData();
  }

  
}
