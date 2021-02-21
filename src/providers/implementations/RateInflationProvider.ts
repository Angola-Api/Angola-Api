import { RateInflation } from "../../entities/RateInflation";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateInflationProvider } from "../IRateInflationProvider";

export class RateInflationProvider implements IRateInflationProvider {

  constructor(private puppeteer: IPuppeteer) {}
  
   async getRateInflation(): Promise<RateInflation> {
    return await this.puppeteer.extractData();
  }

}
