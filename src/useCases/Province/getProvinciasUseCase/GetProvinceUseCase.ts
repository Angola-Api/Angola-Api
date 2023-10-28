import { IGetProvinceUSeCase } from "./IgetProvinceUseCase";
import { provinces } from "../../../constants/mock/provinces";
import { IProvincesProps } from "../../../constants/mock/provinces/types";

export class GetProvinceUseCase implements IGetProvinceUSeCase {
  async execute(): Promise<IProvincesProps[]> {
    return provinces;
  }
}
