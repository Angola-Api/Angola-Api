import { IProvinciesMock } from '../../../constants/mock/type';

export interface IGetProvinceUSeCase {
  execute(): Promise<IProvinciesMock[]>;
}
