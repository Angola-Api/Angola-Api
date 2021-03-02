import { ProvinciaModel } from '../../models';
import { Provincia } from '../../../entities/Provincia';
import { GetAllProvinces, GetOneProvince } from './ProvinceProtocols';
import { MongoHelper } from '../../helpers';
import { toProvinceObject } from './helper';
export class ProvinceMethods implements GetAllProvinces, GetOneProvince {
  async getAll(): Promise<ReadonlyArray<Provincia>> {
    const data = await ProvinciaModel.find({});
    const provinces = data.map((item) => toProvinceObject(item));
    return provinces;
  }

  async getOne(id: string): Promise<Provincia> {
    const province = await ProvinciaModel.findById(id);
    return toProvinceObject(province);
  }
}
