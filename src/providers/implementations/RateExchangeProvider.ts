import { RateExchange } from "../../entities/RateExchange";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateExchangeProvider } from "../IRateExchangeProvider";

export class RateExchangeProvider implements IRateExchangeProvider {
  
  constructor(private puppeteer: IPuppeteer) {}
  async getRateExchange(): Promise<RateExchange> {
    return await this.puppeteer.extractData();
  }

}
