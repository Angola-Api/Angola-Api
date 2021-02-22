import { ProvinciaModel } from '../../models';
import { Provincia } from '../../../entities/Provincia';
import { GetAllProvinces } from './ProvinceProtocols';
export class ProvinceMethos implements GetAllProvinces {
  async getAll(): Promise<Array<Provincia>> {
    const provinces = await ProvinciaModel.find({});
    return provinces;
  }
}
