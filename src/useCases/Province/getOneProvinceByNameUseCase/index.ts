import { GetOneProvinceByNameUseCase } from "./GetOneProvinceByNameUseCase";
import { GetOneProvinceByNameController } from "./GetOneProvinceByNameController";
import { ProvinceService } from "../../../services/implementations/Province";

const provinceService = new ProvinceService();

const getOneProvinceByNameUseCase = new GetOneProvinceByNameUseCase(
  provinceService
);

export const getOneProvinceByNameController = new GetOneProvinceByNameController(
  getOneProvinceByNameUseCase
);
