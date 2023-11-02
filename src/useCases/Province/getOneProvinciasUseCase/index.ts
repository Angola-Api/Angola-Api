import { GetOneProvinceUseCase } from './GetOneProvinceUseCase';
import { GetOneProvinceController } from './GetOneProvinceController';
import { ProvinceService } from '../../../services/implementations/Province';

const getOneProvinceUseCase = new GetOneProvinceUseCase(new ProvinceService);
export const getOneProvinceController = new GetOneProvinceController(
  getOneProvinceUseCase
);
