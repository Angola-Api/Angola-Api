import { ProvinciaModel } from '../../models';
import { Provincia } from '../../../entities/Provincia';
import { GetAllProvinces, GetOneProvince } from './ProvinceProtocols';
export class ProvinceMethods implements GetAllProvinces, GetOneProvince {
  async getAll(): Promise<Array<Provincia>> {
    const provinces = await ProvinciaModel.find({});
    return provinces;
  }

  async getOne(id: string): Promise<Provincia> {
    const province = await ProvinciaModel.findById(id);
    return province;
  }
}
