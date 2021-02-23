import { RateComercialExchange } from "../../entities/RateComercialExchange";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateComercialExchangeProvider } from "../IRateComercialExchangeProvider";

export class RateComercialExchangeProvider implements IRateComercialExchangeProvider {

  constructor(private puppeteer: IPuppeteer) {}
  
  async getRateComercialExchange(): Promise<RateComercialExchange> {
    return await this.puppeteer.extractData();
  }

}
