import { GetProvinceUseCase } from "./GetProvinceUseCase";
import { GetProvinceController } from "./GetProvinceController";
import { ProvinceService } from "../../../services/implementations/Province";


const getProvinceUseCase = new GetProvinceUseCase(new ProvinceService());
export const getProvinceController = new GetProvinceController(
  getProvinceUseCase
);
