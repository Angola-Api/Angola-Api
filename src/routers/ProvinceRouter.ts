import { Router } from "express";
import GetProvinceController from "../useCases/Province/getProvinciasUseCase";
import { getOneProvinceController } from "../useCases/Province";

const ProvinceRouter = (router = Router()) => {
  router.get("/provinces", async (req, res) => {
    return GetProvinceController.handle(req, res);
  });
  router.get("/provinces/:id", async (req, res) => {
    return getOneProvinceController.handle(req, res);
  });
  return router;
};

export default ProvinceRouter;
