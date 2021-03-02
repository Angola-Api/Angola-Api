import {RateExchange} from '../entities/RateExchange'
export interface IRateExchangeProvider {
   getRateExchange(): Promise<RateExchange>
}