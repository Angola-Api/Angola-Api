import { GetOneProvinceUseCase } from './GetOneProvinceUseCase';
import { GetOneProvinceController } from './GetOneProvinceController';

const getOneProvinceUseCase = new GetOneProvinceUseCase();
export const getOneProvinceController = new GetOneProvinceController(
  getOneProvinceUseCase
);
