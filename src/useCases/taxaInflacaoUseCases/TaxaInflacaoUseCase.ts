import {ITaxaInflacaoProvider} from '../../providers/ITaxaInflacaoProvider'

export class TaxaInflacaoUseCase {
  constructor(private taxaInflacaoProvider : ITaxaInflacaoProvider){}

  async execute(){
    return await this.taxaInflacaoProvider.getTaxaInflacao();
  } 
}