import {RateInflationProvider} from '../../providers/implementations/RateInflationProvider';
import {RateInflationUseCase} from "./RateInflationUseCase"
import {RateInflationUseController} from './RateInflationUseController'

const rateInflationProvider = new RateInflationProvider();
const rateInflationUseCase = new RateInflationUseCase(rateInflationProvider);
const rateInflationController = new RateInflationUseController(rateInflationUseCase) 

export {
  rateInflationController
}