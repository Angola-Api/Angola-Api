import { IGetOneProvinceByNameUseCase } from "./IGetOneProvinceByNameUseCase";
import { IProvincesProps } from "../../../constants/mock/provinces/types";
import { IProvince } from "../../../services/IProvince";

export class GetOneProvinceByNameUseCase
  implements IGetOneProvinceByNameUseCase
{
  constructor(private provinceService: IProvince) {}

  async execute(nome: string): Promise<IProvincesProps> {
    const province = await this.provinceService.getOneProvinceByName(nome);
    return province;
  }
}
