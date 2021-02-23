import {RateComerciaExchange} from '../entities/RateComerciaExchange'
export interface IRateComerciaExchangeProvider {
   getRateComerciaExchange(): Promise<RateComerciaExchange>
}