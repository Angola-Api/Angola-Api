import { Types } from 'mongoose';

export interface Municipio {
  id: string;
  descricao: string;
  nome: string;
  provincia: Types.ObjectId | string | Record<string, unknown>;
}
