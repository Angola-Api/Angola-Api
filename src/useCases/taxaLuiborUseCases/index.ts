import {TaxaLuiborProvider} from '../../providers/implementations/TaxaLuiborProvider';
import {TaxaLuiborUseCase} from "./TaxaLuiborUseCase"
import {TaxaLuiborUseController} from './TaxaLuiborUseController'

const taxaLuiborProvider = new TaxaLuiborProvider();
const taxaLuiborUseCase = new TaxaLuiborUseCase(taxaLuiborProvider);
const taxaLuiborController = new TaxaLuiborUseController(taxaLuiborUseCase) 

export {
  taxaLuiborController
}