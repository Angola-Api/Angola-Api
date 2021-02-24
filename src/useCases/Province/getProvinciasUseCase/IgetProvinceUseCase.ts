import { Provincia } from '../../../entities/Provincia';

export interface IGetProvinceUSeCase {
  execute(): Promise<Array<Provincia>>;
}
