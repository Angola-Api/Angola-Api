import { MunicipioModel, ProvinciaModel } from '../../models';
import { Municipio } from '../../../entities/Municipio';
import { GetAllMunicipios, GetOneMunicipio } from './MunicipioProtocols';
import { toCountyObject } from './helper';

export class MunicipioMethods implements GetAllMunicipios, GetOneMunicipio {
  async getAll(provincia: string): Promise<Array<Municipio>> {
    const { id } = await ProvinciaModel.findOne({ nome: provincia });
    const data = await MunicipioModel.find({ provincia: id }).populate(
      'provincia',
      'nome'
    );

    const counties = data.map((item) => toCountyObject(item));
    return counties;
  }

  async getOne(id: string): Promise<Municipio> {
    const province = await MunicipioModel.findById(id);
    return province;
  }
}
