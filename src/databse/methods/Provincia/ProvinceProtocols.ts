import { Provincia } from '../../../entities/Provincia';

export interface GetAllProvinces {
  getAll(): Promise<Array<Provincia>>;
}
export interface GetOneProvince {
  getOne(id: string): Promise<Provincia>;
}
