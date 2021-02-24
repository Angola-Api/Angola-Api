import { GetMunicipioUseCase } from './GetMunicipiosUseCase';
import { MunicipioMethods } from '../../../databse/methods/municipio';
import { GetMunicipioController } from './GetMunicipiosController';

const getMunicipioUseCase = new GetMunicipioUseCase(new MunicipioMethods());
export const getMunicipioController = new GetMunicipioController(
  getMunicipioUseCase
);
