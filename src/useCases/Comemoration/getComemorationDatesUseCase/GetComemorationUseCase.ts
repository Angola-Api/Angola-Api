import { IGetComemorativeUseCase } from "./IgetComemorationUseCase";
import { GetAllComemorativeDates } from "src/databse/methods/comemorative/ComemorativeProtocols";
import { ComemorativeDates } from "src/entities/Comemorative";

export class GetComemorationDateUseCase implements IGetComemorativeUseCase {
  constructor(private getAll: GetAllComemorativeDates) {}
  async execute(): Promise<Array<ComemorativeDates>> {
    const comemoration = await this.getAll.getAll();
    return comemoration;
  }
}
