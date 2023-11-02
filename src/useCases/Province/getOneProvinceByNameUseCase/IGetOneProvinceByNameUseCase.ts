import { IProvincesProps } from "../../../constants/mock/provinces/types";

export interface IGetOneProvinceByNameUseCase {
  execute(nome: string): Promise<IProvincesProps>;
}
