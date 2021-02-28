import { ProvinciaModel } from '../../models';
import { Provincia } from '../../../entities/Provincia';
import { GetAllProvinces, GetOneProvince } from './ProvinceProtocols';
import { MongoHelper } from '../../helpers';
export class ProvinceMethods implements GetAllProvinces, GetOneProvince {
  async getAll(): Promise<ReadonlyArray<Provincia>> {
    const provinces = await ProvinciaModel.find({});
    return provinces;
  }

  async getOne(id: string): Promise<Provincia> {
    const province = (await ProvinciaModel.findById(id).lean()) as Provincia;
    return province;
  }
}
