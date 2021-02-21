import {Puppeteer} from '../../services/implementations/Puppeteer'
import {RateBnaProvider} from '../../providers/implementations/RateBnaProvider';
import {RateBnaUseCase} from "./RateBnaUseCase"
import {RateBnaUseController} from './RateBnaUseController'

const puppeteer = new Puppeteer();
const rateBnaProvider = new RateBnaProvider(puppeteer);
const rateBnaUseCase = new RateBnaUseCase(rateBnaProvider);
const rateBnaController = new RateBnaUseController(rateBnaUseCase) 

export {
  rateBnaController
}