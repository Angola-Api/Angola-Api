import { ComemorativeDates } from "../../../entities/Comemorative";

export interface IGetComemorativeUseCase {
  execute(): Promise<Array<ComemorativeDates>>;
}
