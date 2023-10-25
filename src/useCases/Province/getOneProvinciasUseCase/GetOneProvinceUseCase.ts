import { IGetOneProvinceUSeCase } from "./IgetOneProvinceUseCase";

import provinces from "../../../constants/mock/province";
import { IProvinciesMock } from "../../../constants/mock/type";

export class GetOneProvinceUseCase implements IGetOneProvinceUSeCase {
  async execute(id: string): Promise<IProvinciesMock> {
    const province = provinces.find((province) => province.id === id);
    return province;
  }
}
