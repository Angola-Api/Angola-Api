import {TaxaBnaProvider} from '../../providers/implementations/TaxaBnaProvider';
import {TaxaBnaUseCase} from "./TaxaBnaUseCase"
import {TaxaBnaUseController} from './TaxaBnaUseController'

const taxaBnaProvider = new TaxaBnaProvider();
const taxaBnaUseCase = new TaxaBnaUseCase(taxaBnaProvider);
const taxaBnaController = new TaxaBnaUseController(taxaBnaUseCase) 

export {
  taxaBnaController
}