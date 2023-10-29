import { GetComemorationDateUseCase } from "./GetComemorationUseCase";
import { GetComemorativeDateController } from "./GetComemorationUseCaseController";
import { ComemorativeMethods } from "../../../databse/methods/comemorative";

const getComemorativeUseCase = new GetComemorationDateUseCase(
  new ComemorativeMethods()
);

export const getComemorativeController = new GetComemorativeDateController(
  getComemorativeUseCase
);
