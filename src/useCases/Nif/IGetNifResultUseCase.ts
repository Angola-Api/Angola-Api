import { Nif } from "src/entities/Nif";

export interface IGetNifResultUseCase {
  execute(nif: string): Promise<Nif>;
}
