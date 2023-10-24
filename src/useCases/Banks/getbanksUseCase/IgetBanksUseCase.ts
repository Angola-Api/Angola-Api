import { Banks } from "../../../entities/Banks";

export interface IGetBanksUseCase {
  execute(): Promise<Array<Banks>>;
}
