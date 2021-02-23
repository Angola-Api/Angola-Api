import {RateComercialExchange} from '../entities/RateComercialExchange'
export interface IRateComerciaExchangeProvider {
   getRateComerciaExchange(): Promise<RateComercialExchange>
}