import { IGetOneProvinceUSeCase } from "./IgetOneProvinceUseCase";
import { provinces } from "../../../constants/mock/provinces";
import { IProvincesProps } from "../../../constants/mock/provinces/types";

export class GetOneProvinceUseCase implements IGetOneProvinceUSeCase {
  async execute(id: string): Promise<IProvincesProps> {
    return provinces.find((province) => province.id === id);
  }
}
