import {IRateExchangeProvider} from '../../providers/IRateExchangeProvider'

export class RateExchangeUseCase {
  constructor(private rateExchangeProvider : IRateExchangeProvider){}

  async execute(){
    return await this.rateExchangeProvider.getRateExchange();
  } 
}