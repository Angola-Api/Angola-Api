import {IRateComercialExchangeProvider} from '../../providers/IRateComercialExchangeProvider'

export class RateComercialExchangeUseCase {
  constructor(private rateComercialExchangeProvider : IRateComercialExchangeProvider){}

  async execute(){
    return await this.rateComercialExchangeProvider.getRateComercialExchange();
  } 
}