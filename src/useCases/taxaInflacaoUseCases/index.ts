import {TaxaInflacaoProvider} from '../../providers/implementations/TaxasInflacaoProvider';
import {TaxaInflacaoUseCase} from "./TaxaInflacaoUseCase"
import {TaxaInflacaoUseController} from './TaxaInflacaoUseController'

const taxaInflacaoProvider = new TaxaInflacaoProvider();
const taxaInflacaoUseCase = new TaxaInflacaoUseCase(taxaInflacaoProvider);
const taxaInflacaoController = new TaxaInflacaoUseController(taxaInflacaoUseCase) 

export {
  taxaInflacaoController
}