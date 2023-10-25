import { IProvinciesMock } from "src/constants/mock/type";

export interface IGetOneProvinceUSeCase {
  execute(id: string): Promise<IProvinciesMock>;
}
