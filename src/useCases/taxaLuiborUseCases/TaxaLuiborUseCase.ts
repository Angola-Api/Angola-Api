import {ITaxaLuiborProvider} from '../../providers/ITaxaLuiborProvider'

export class TaxaLuiborUseCase {
  constructor(private taxaLuiborProvider : ITaxaLuiborProvider){}

  async execute(){
    return await this.taxaLuiborProvider.getTaxasLuibor();
  } 
}