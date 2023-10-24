import { RateTermDeposit } from "../entities/RateTermDeposit";
export interface IRateTermDepositProvider {
  getRateTermDeposit(): Promise<RateTermDeposit>;
}
