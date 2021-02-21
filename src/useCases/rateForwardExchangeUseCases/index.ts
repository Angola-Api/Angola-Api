import {RateForwardExchangeProvider} from '../../providers/implementations/RateForwardExchangeProvider';
import {RateForwardExchangeUseCase} from "./RateForwardExchangeUseCase"
import {RateForwardExchangeUseController} from './RateForwardExchangeUseController'

const rateForwardExchangeProvider = new RateForwardExchangeProvider();
const rateForwardExchangeUseCase = new RateForwardExchangeUseCase(rateForwardExchangeProvider);
const rateForwardExchangeController = new RateForwardExchangeUseController(rateForwardExchangeUseCase) 

export {
  rateForwardExchangeController
}