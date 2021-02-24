import {RateComercialExchange} from '../entities/RateComercialExchange'
export interface IRateComercialExchangeProvider {
   getRateComercialExchange(): Promise<RateComercialExchange>
}