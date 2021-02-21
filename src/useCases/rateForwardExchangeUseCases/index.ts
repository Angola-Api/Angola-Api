import {Puppeteer, RateForwardExchangeNavigator} from '../../services/implementations'
import {RateForwardExchangeProvider} from '../../providers/implementations/RateForwardExchangeProvider';
import {RateForwardExchangeUseCase} from "./RateForwardExchangeUseCase"
import {RateForwardExchangeUseController} from './RateForwardExchangeUseController'

const rateForwardExchangeNavigator = new RateForwardExchangeNavigator();
const puppeteer = new Puppeteer("https://www.bna.ao/",rateForwardExchangeNavigator.navigator)
const rateForwardExchangeProvider = new RateForwardExchangeProvider(puppeteer);
const rateForwardExchangeUseCase = new RateForwardExchangeUseCase(rateForwardExchangeProvider);
const rateForwardExchangeController = new RateForwardExchangeUseController(rateForwardExchangeUseCase) 

export {
  rateForwardExchangeController
}