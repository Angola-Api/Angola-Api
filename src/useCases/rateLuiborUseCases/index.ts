import {RateLuiborProvider} from '../../providers/implementations/RateLuiborProvider';
import {RateLuiborUseCase} from "./RateLuiborUseCase"
import {RateLuiborUseController} from './RateLuiborUseController'

const rateLuiborProvider = new RateLuiborProvider();
const rateLuiborUseCase = new RateLuiborUseCase(rateLuiborProvider);
const rateLuiborController = new RateLuiborUseController(rateLuiborUseCase) 

export {
  rateLuiborController
}