import { RateForwardExchange } from "../../entities/RateForwardExchange";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateForwardExchangeProvider } from "../IRateForwardExchangeProvider";

export class RateForwardExchangeProvider implements IRateForwardExchangeProvider {
  constructor(private puppeteer: IPuppeteer) {}
  async getRateForwardExchange(): Promise<RateForwardExchange> {
    return await this.puppeteer.extractData();
  }

}
