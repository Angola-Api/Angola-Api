import {ITaxasLuiborProvider} from '../../providers/ITaxasLuiborProvider'

export class TaxasLuiborUseCase {
  constructor(private taxasLuiborProvider : ITaxasLuiborProvider){}

  async execute(){
    return await this.taxasLuiborProvider.getTaxasLuibor();
  } 
}