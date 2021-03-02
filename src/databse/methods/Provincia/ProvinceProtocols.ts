import { Provincia } from '../../../entities/Provincia';

export interface GetAllProvinces {
  getAll(): Promise<ReadonlyArray<Provincia>>;
}
export interface GetOneProvince {
  getOne(id: string): Promise<Provincia>;
}
