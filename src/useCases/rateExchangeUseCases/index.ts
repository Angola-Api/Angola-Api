import {RateExchangeProvider} from '../../providers/implementations/RateExchangeProvider';
import {RateExchangeUseCase} from "./RateExchangeUseCase"
import {RateExchangeUseController} from './RateExchangeUseController'

const rateExchangeProvider = new RateExchangeProvider();
const rateExchangeUseCase = new RateExchangeUseCase(rateExchangeProvider);
const rateExchangeController = new RateExchangeUseController(rateExchangeUseCase) 

export {
  rateExchangeController
}