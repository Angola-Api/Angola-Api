import {IRateTermDepositProvider} from '../../providers/IRateTermDepositProvider'

export class RateTermDepositUseCase {
  constructor(private rateTermDepositProvider : IRateTermDepositProvider){}

  async execute(){
    return await this.rateTermDepositProvider.getRateTermDeposit();
  } 
}