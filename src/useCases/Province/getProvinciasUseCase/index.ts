import { GetProvinceUseCase } from "./GetProvinceUseCase";
import { GetProvinceController } from "./GetProvinceController";

const getProvinceUseCase = new GetProvinceUseCase();
export const getProvinceController = new GetProvinceController(
  getProvinceUseCase
);
