import {TaxasLuiborProvider} from '../../providers/implementations/TaxasLuiborProvider';
import {TaxasLuiborUseCase} from "./TaxasLuiborUseCase"
import {TaxasLuiborUseController} from './TaxasLuiborUseController'

const taxasLuiborProvider = new TaxasLuiborProvider();
const taxasLuiborUseCase = new TaxasLuiborUseCase(taxasLuiborProvider);
const taxasLuiborController = new TaxasLuiborUseController(taxasLuiborUseCase) 

export {
  taxasLuiborController
}