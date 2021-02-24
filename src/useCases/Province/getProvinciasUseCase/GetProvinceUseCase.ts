import { IGetProvinceUSeCase } from './IgetProvinceUseCase';
import { GetAllProvinces } from '../../../databse/methods/Provincia/ProvinceProtocols';
import { Provincia } from '../../../entities/Provincia';

export class GetProvinceUseCase implements IGetProvinceUSeCase {
  constructor(private getAllprovinces: GetAllProvinces) {}
  async execute(): Promise<Array<Provincia>> {
    const provinces = await this.getAllprovinces.getAll();
    return provinces;
  }
}
