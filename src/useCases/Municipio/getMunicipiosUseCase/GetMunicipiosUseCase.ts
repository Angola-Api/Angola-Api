import { IGetMunicipioUSeCase } from './IgetMunicipiosUseCase';
import { GetAllMunicipios } from '../../../databse/methods/municipio/MunicipioProtocols';
import { Municipio } from '../../../entities/Municipio';

export class GetMunicipioUseCase implements IGetMunicipioUSeCase {
  constructor(private getAllMunicipios: GetAllMunicipios) {}
  async execute(provincia: string): Promise<Array<Municipio>> {
    const municipios = await this.getAllMunicipios.getAll(provincia);
    return municipios;
  }
}
