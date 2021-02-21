import {RateBnaProvider} from '../../providers/implementations/RateBnaProvider';
import {RateBnaUseCase} from "./RateBnaUseCase"
import {RateBnaUseController} from './RateBnaUseController'

const rateBnaProvider = new RateBnaProvider();
const rateBnaUseCase = new RateBnaUseCase(rateBnaProvider);
const rateBnaController = new RateBnaUseController(rateBnaUseCase) 

export {
  rateBnaController
}