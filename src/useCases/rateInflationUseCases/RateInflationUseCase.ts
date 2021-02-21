import {IRateInflationProvider} from '../../providers/IRateInflationProvider'

export class RateInflationUseCase {
  constructor(private rateInflationProvider : IRateInflationProvider){}

  async execute(){
    return await this.rateInflationProvider.getRateInflation();
  } 
}