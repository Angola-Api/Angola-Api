import {IRateForwardExchangeProvider} from '../../providers/IRateForwardExchangeProvider'

export class RateForwardExchangeUseCase {
  constructor(private rateForwardExchangeProvider : IRateForwardExchangeProvider){}

  async execute(){
    return await this.rateForwardExchangeProvider.getRateForwardExchange();
  } 
}