import { ProvinciaModel } from "../../models";
import { GetAllBanks, GetOneBank } from "./BankProtocols";
import { MongoHelper } from "../../helpers";
import { toBankObject } from "./helper";
import { Banks } from "src/entities/Banks";
import BanksModel from "src/databse/models/BanksModel";

export class BanksMethods implements GetAllBanks, GetOneBank {
  async getAll(): Promise<Banks[]> {
    const data = await BanksModel.find({});
    const banks = data.map((item) => toBankObject(item));
    return banks;
  }

  async getOne(id: string): Promise<Banks> {
    const bank = await BanksModel.findById(id);
    return toBankObject(bank);
  }
}
