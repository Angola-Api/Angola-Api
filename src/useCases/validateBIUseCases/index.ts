import { ValidateBi } from '../../lib/implementations';
import { ValidateBiUseCase } from './ValidateBiUseCase';
import { ValidateBiController } from './ValidateBiController';
import { Bi } from 'src/services/implementations/Bi';
import { AxiosHttp } from 'src/services/implementations/AxiosHttp';

const validateBI = new ValidateBi();

const httpClient = new AxiosHttp();

const bi = new Bi(httpClient);

const validateBiUseCase = new ValidateBiUseCase(validateBI, bi);

export const validateBIController = new ValidateBiController(validateBiUseCase);
