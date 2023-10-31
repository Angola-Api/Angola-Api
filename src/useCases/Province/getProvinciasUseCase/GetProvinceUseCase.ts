import { IGetProvinceUSeCase } from "./IgetProvinceUseCase";
import { IProvincesProps } from "../../../constants/mock/provinces/types";
import { IProvince } from "../../../services/IProvince";

export class GetProvinceUseCase implements IGetProvinceUSeCase {
  constructor(private provinceService: IProvince){};

  async execute(): Promise<any> {
    const provinces = await this.provinceService.getProvinces();

    return provinces;
  }
}
