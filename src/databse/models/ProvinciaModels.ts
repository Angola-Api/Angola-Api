import { Document, Model, Schema, model } from 'mongoose';
import { MongooseModel } from '../../constants';
import { Provincia } from '../../entities/Provincia';

interface ProvinciaDocument extends Provincia, Document {
  id: Document['_id'];
}

export interface ProvinciaModel extends Model<ProvinciaDocument> {}

const ProvinciaSchema = new Schema<ProvinciaDocument, ProvinciaModel>({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  populacao: {
    type: Number,
    required: true,
  },
  municipios: {
    type: Number,
    required: true,
  },
  comunas: {
    type: Number,
    required: true,
  },
});

export default model<ProvinciaDocument, ProvinciaModel>(
  MongooseModel.Provincia,
  ProvinciaSchema
);
