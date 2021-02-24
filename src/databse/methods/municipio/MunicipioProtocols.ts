import { Municipio } from '../../../entities/Municipio';

export interface GetAllMunicipios {
  getAll(provincia: string): Promise<Array<Municipio>>;
}
export interface GetOneMunicipio {
  getOne(id: string): Promise<Municipio>;
}
