import { Provincia } from '../../../entities/Provincia';

export interface GetAllProvinces {
  getAll(): Promise<Array<Provincia>>;
}
