import {Puppeteer, RateExchangeNavigator} from '../../services/implementations'
import {RateExchangeProvider} from '../../providers/implementations/RateExchangeProvider';
import {RateExchangeUseCase} from "./RateExchangeUseCase"
import {RateExchangeUseController} from './RateExchangeUseController'

const rateExchangeNavigator = new RateExchangeNavigator();
const puppeteer = new Puppeteer("https://www.bna.ao/",rateExchangeNavigator.navigator)
const rateExchangeProvider = new RateExchangeProvider(puppeteer);
const rateExchangeUseCase = new RateExchangeUseCase(rateExchangeProvider);
const rateExchangeController = new RateExchangeUseController(rateExchangeUseCase) 

export {
  rateExchangeController
}