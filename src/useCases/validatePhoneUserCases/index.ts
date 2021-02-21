import { GetOperator, ValidatePhone } from '../../lib/implementations';
import { ValidatePhoneUserCase } from './ValidatePhoneCaserCase';
import { ValidatePhoneController } from './ValidatePhoneController';

const getOperator = new GetOperator();
const validatePhone = new ValidatePhone();

const validatePhoneUserCase = new ValidatePhoneUserCase(
  validatePhone,
  getOperator
);

export const validatePhoneController = new ValidatePhoneController(
  validatePhoneUserCase
);
