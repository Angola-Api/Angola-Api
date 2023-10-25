import { GetProvinceController } from './GetProvinceController'
import { GetProvinceUseCase } from './GetProvinceUseCase';

const getProvincesUseCase = new GetProvinceUseCase();

const getProvinceController = new GetProvinceController(getProvincesUseCase);

export default getProvinceController;
