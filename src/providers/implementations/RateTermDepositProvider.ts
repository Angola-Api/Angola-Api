import { RateTermDeposit } from "../../entities/RateTermDeposit";
import { IPuppeteer } from "../../services/IPuppeteer";
import { IRateTermDepositProvider } from "../IRateTermDepositProvider";

export class RateTermDepositProvider implements IRateTermDepositProvider {

  constructor(private puppeteer: IPuppeteer) {}
  
  async getRateTermDeposit(): Promise<RateTermDeposit> {
    return await this.puppeteer.extractData();
  }

}
