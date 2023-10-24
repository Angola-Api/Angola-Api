import { ProvinciaModel } from "../../models";
import {
  GetOneComemorativeDate,
  GetAllComemorativeDates,
} from "./ComemorativeProtocols";
import { toComemorativeDateObject } from "./helper";
import { ComemorativeDates } from "src/entities/Comemorative";
import ComemorativeModel from "src/databse/models/ComemorativeModel";

export class ComemorativeMethods
  implements GetAllComemorativeDates, GetOneComemorativeDate
{
  async getAll(): Promise<ComemorativeDates[]> {
    const data = await ComemorativeModel.find({});
    const ComemorativeDates = data.map((item) =>
      toComemorativeDateObject(item)
    );
    return ComemorativeDates;
  }

  async getOne(id: string): Promise<ComemorativeDates> {
    const date = await ComemorativeModel.findById(id);
    return toComemorativeDateObject(date);
  }
}
