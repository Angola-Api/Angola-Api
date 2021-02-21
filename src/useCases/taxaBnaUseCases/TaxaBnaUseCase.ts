import {ITaxaBnaProvider} from '../../providers/ITaxaBnaProvider'

export class TaxaBnaUseCase {
  constructor(private taxaBnaProvider : ITaxaBnaProvider){}

  async execute(){
    return await this.taxaBnaProvider.getTaxaBna();
  } 
}