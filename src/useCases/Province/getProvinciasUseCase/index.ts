import { GetProvinceUseCase } from './GetProvinceUseCase';
import { ProvinceMethods } from '../../../databse/methods/Provincia';
import { GetProvinceController } from './GetProvinceController';

const getProvinceUseCase = new GetProvinceUseCase(new ProvinceMethods());
export const getProvinceController = new GetProvinceController(
  getProvinceUseCase
);
