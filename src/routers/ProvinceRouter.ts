import { Router } from "express";
import {
  getProvinceController,
  getOneProvinceController,
} from "../useCases/Province";

import { getOneProvinceByNameController } from "../useCases/Province/getOneProvinceByNameUseCase/";

const ProvinceRouter = (router = Router()) => {
  router.get("/provinces", async (req, res) => {
    return getProvinceController.handle(req, res);
  });
  router.get("/provinces/:id", async (req, res) => {
    return getOneProvinceController.handle(req, res);
  });

  router.get("/provinces/search/country", async (req, res) => {
    return getOneProvinceByNameController.execute(req, res)
  });
  return router;
};

export default ProvinceRouter;
