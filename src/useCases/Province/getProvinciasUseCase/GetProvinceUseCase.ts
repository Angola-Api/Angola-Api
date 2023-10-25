import { IProvinciesMock } from "src/constants/mock/type";
import provincies from "../../../constants/mock/province";
import { IGetProvinceUSeCase } from "./IgetProvinceUseCase";

export class GetProvinceUseCase implements IGetProvinceUSeCase {
  async execute(): Promise<IProvinciesMock[]> {
    return provincies;
  }
}
