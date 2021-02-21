import {RateTermDeposit} from '../entities/RateTermDeposit'
export interface IRateTermDepositProvider {
   getRateLuibor(): Promise<RateTermDeposit>
}