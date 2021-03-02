import { Document, Model, Schema, model } from 'mongoose';
import { MongooseModel } from '../../constants';
import { Municipio } from '../../entities/Municipio';

interface MunicipioDocument extends Municipio, Document {
  id: Document['_id'];
}

export interface MunicipioModel extends Model<MunicipioDocument> {}

const MunicipioSchema = new Schema<MunicipioDocument, MunicipioModel>({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  descricao: {
    type: String,
  },
  provincia: {
    type: Schema.Types.ObjectId,
    ref: MongooseModel.Provincia,
    required: true,
  },
});

export default model<MunicipioDocument, MunicipioModel>(
  MongooseModel.Muncipio,
  MunicipioSchema
);
