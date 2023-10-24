import { Document, Model, Schema, model } from "mongoose";
import { MongooseModel } from "../../constants";
import { Banks } from "src/entities/Banks";

interface ComemorativeDocument extends Banks, Document {
  id: Document["_id"];
}

export interface ComemorativeModel extends Model<ComemorativeDocument> {}

const ComemorativeSchema = new Schema<ComemorativeDocument, ComemorativeModel>({
  date: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    ref: MongooseModel.Banks,
    required: true,
  },
  atribuition: {
    type: String,
  },
});

export default model<ComemorativeDocument, ComemorativeModel>(
  MongooseModel.Comemorative,
  ComemorativeSchema
);
