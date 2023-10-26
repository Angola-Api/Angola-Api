import { IProvincesProps } from "src/constants/mock/provinces/types";

export interface IGetOneProvinceUSeCase {
  execute(id: string): Promise<IProvincesProps>;
}
