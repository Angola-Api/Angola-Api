import { ProvinciaModel } from "../../models";
import {
  GetOneComemorativeDate,
  GetAllComemorativeDates,
} from "../../../databse/methods/comemorative/ComemorativeProtocols";
import { toComemorativeDateObject } from "../../../databse/methods/comemorative/helper";
import { ComemorativeDates } from "../../../entities/Comemorative";
import ComemorativeModel from "../../../databse/models/ComemorativeModel";

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
