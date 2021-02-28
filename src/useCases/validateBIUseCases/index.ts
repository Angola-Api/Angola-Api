import { ValidateBi } from '../../lib/implementations';
import { ValidateBiUseCase } from './ValidateBiUseCase';
import { ValidateBiController } from './ValidateBiController';

const validateBI = new ValidateBi();

const validateBiUseCase = new ValidateBiUseCase(validateBI);

export const validateBIController = new ValidateBiController(validateBiUseCase);
