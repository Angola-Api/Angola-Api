import { ComemorativeDates } from "../../../entities/Comemorative";

export interface GetAllComemorativeDates {
  getAll(): Promise<ComemorativeDates[]>;
}
export interface GetOneComemorativeDate {
  getOne(id: string): Promise<ComemorativeDates>;
}
