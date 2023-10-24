import { Banks } from "../../../entities/Banks";

export interface GetAllBanks {
  getAll(): Promise<Banks[]>;
}
export interface GetOneBank {
  getOne(id: string): Promise<Banks>;
}
