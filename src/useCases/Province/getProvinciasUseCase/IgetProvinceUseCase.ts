import { Provincia } from '../../../entities/Provincia';

export interface IGetProvinceUSeCase {
  execute(): Promise<ReadonlyArray<Provincia>>;
}
