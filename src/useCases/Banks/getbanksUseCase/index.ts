import { GetBanksUseCase } from "./GetBanksUseCase";
import { GetBanksController } from "./GetBanksUseCaseController";
import { BanksMethods } from "src/databse/methods/banks";

const getBanksUseCase = new GetBanksUseCase(new BanksMethods());
export const getBanksController = new GetBanksController(getBanksUseCase);
