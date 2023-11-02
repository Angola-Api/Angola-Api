import { IGetOneProvinceUSeCase } from "./IgetOneProvinceUseCase";
import { IProvincesProps } from "../../../constants/mock/provinces/types";
import { IProvince } from "../../../services/IProvince";

export class GetOneProvinceUseCase implements IGetOneProvinceUSeCase {
  constructor(private provinceService: IProvince) {}

  async execute(id: string): Promise<IProvincesProps> {
    const province = await this.provinceService.getOneProvince(id);
    return province;
  }
}
