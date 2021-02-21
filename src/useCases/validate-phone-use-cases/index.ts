import { GetOperator, ValidatePhone } from '../../lib/implementations';
import { ValidatePhoneUserCase } from './validate-phone-user-case';
import { ValidatePhoneController } from './validate-phone-controller';

const getOperator = new GetOperator();
const validatePhone = new ValidatePhone();

const validatePhoneUserCase = new ValidatePhoneUserCase(
  validatePhone,
  getOperator
);

export const validatePhoneController = new ValidatePhoneController(
  validatePhoneUserCase
);
