import { IProvincesProps } from "src/constants/mock/provinces/types";

export interface IGetProvinceUSeCase {
  execute(): Promise<IProvincesProps[]>;
}
