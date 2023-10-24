import { IGetBanksUseCase } from "./IgetBanksUseCase";
import { GetAllBanks } from "src/databse/methods/banks/BankProtocols";
import { Banks } from "src/entities/Banks";

export class GetBanksUseCase implements IGetBanksUseCase {
  constructor(private getAllBanks: GetAllBanks) {}
  async execute(): Promise<Array<Banks>> {
    const banks = await this.getAllBanks.getAll();
    return banks;
  }
}
