import { ValidatePassPort } from '../../lib/implementations';
import { ValidatePassPortUseCase } from './ValidatePassPortUseCase';
import { ValidatePassPortController } from './ValidatePassportController';

const validatePassPort = new ValidatePassPort();

const validatePassportUseCase = new ValidatePassPortUseCase(validatePassPort);

export const validatePassPortCOntroller = new ValidatePassPortController(
  validatePassportUseCase
);
