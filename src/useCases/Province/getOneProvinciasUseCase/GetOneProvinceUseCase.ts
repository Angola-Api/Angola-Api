import { IGetOneProvinceUSeCase } from './IgetOneProvinceUseCase';
import { GetOneProvince } from '../../../databse/methods/Provincia/ProvinceProtocols';
import { Provincia } from '../../../entities/Provincia';

export class GetOneProvinceUseCase implements IGetOneProvinceUSeCase {
  constructor(private getOneprovinces: GetOneProvince) {}
  async execute(id: string): Promise<Provincia> {
    const provinces = await this.getOneprovinces.getOne(id);
    return provinces;
  }
}
