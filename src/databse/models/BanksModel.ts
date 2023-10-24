import { Document, Model, Schema, model } from "mongoose";
import { MongooseModel } from "../../constants";
import { Banks } from "src/entities/Banks";

interface BankDocument extends Banks, Document {
  id: Document["_id"];
}

export interface BankModel extends Model<BankDocument> {}

const BankSchema = new Schema<BankDocument, BankModel>({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  swift: {
    type: String,
    ref: MongooseModel.Banks,
    required: true,
  },
  fullname: {
    type: String,
  },
  name: {
    type: String,
    ref: MongooseModel.Banks,
    required: true,
  },
});

export default model<BankDocument, BankModel>(MongooseModel.Banks, BankSchema);
