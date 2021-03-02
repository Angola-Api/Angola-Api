import { GetOneProvinceUseCase } from './GetOneProvinceUseCase';
import { ProvinceMethods } from '../../../databse/methods/Provincia';
import { GetOneProvinceController } from './GetOneProvinceController';

const getOneProvinceUseCase = new GetOneProvinceUseCase(new ProvinceMethods());
export const getOneProvinceController = new GetOneProvinceController(
  getOneProvinceUseCase
);
