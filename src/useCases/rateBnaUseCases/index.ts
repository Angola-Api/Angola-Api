import {Puppeteer, RateBnaNavigator} from '../../services/implementations'
import {RateBnaProvider} from '../../providers/implementations/RateBnaProvider';
import {RateBnaUseCase} from "./RateBnaUseCase"
import {RateBnaUseController} from './RateBnaUseController'

const rateBnaNavigator = new RateBnaNavigator();
const puppeteer = new Puppeteer("https://www.bna.ao/",rateBnaNavigator.navigator);
const rateBnaProvider = new RateBnaProvider(puppeteer);
const rateBnaUseCase = new RateBnaUseCase(rateBnaProvider);
const rateBnaController = new RateBnaUseController(rateBnaUseCase) 

export {
  rateBnaController
}