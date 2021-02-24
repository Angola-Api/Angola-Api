import { Municipio } from '../../../entities/Municipio';

export interface IGetMunicipioUSeCase {
  execute(provincia: string): Promise<Array<Municipio>>;
}
