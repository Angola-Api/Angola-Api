import { Nif } from "src/entities/Nif";
import { IGetNifResultUseCase } from "./IGetNifResultUseCase";
import { INif } from "src/services/INif";


export default class GetNifResultUseCase implements IGetNifResultUseCase{
  constructor(private nifService : INif){}
  async execute(nif: string): Promise<Nif>{
    return await this.nifService.consultarNif(nif)
  };
}
