import {RateForwardExchange} from '../entities/RateForwardExchange'
export interface IRateForwardExchangeProvider {
   getRateForwardExchange(): Promise<RateForwardExchange>
}