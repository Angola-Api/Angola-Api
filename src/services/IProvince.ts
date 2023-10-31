import { IProvincesProps } from "src/constants/mock/provinces/types";

export interface IProvince {
    getProvinces(): Promise<any>;
    getOneProvince(id: string): Promise<IProvincesProps>;
    getOneProvinceByName(nome: string): Promise<IProvincesProps>;
}