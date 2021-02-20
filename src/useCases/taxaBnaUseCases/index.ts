import {Puppeteer} from '../../services/Puppeteer'
import {TaxaBnaProvider} from '../../providers/implementations/TaxaBnaProvider';
import {TaxaBnaUseCase} from "./TaxaBnaUseCase"
import {TaxaBnaUseController} from './TaxaBnaUseController'

const puppeteer = new Puppeteer();
const taxaBnaProvider = new TaxaBnaProvider(puppeteer);
const taxaBnaUseCase = new TaxaBnaUseCase(taxaBnaProvider);
const taxaBnaController = new TaxaBnaUseController(taxaBnaUseCase) 

export {
  taxaBnaController
}