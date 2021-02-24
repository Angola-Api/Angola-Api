import { Provincia } from '../../../entities/Provincia';

export interface IGetOneProvinceUSeCase {
  execute(id: string): Promise<Provincia>;
}
