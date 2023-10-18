import { ValidateIban } from '../../lib/implementations';
import { ValidateIbanUseCase } from './ValidateIbanUseCase';
import { ValidateIbanController } from './ValidateIbanController';
import { Iban } from '../../services/implementations/Iban';
import { AxiosHttp } from '../../services/implementations/AxiosHttp';

const validateIban = new ValidateIban();
const httpClient = new AxiosHttp();
const iban = new Iban(httpClient);
const validateIbanUseCase = new ValidateIbanUseCase(validateIban, iban);
export const validateIbanController = new ValidateIbanController(validateIbanUseCase);
