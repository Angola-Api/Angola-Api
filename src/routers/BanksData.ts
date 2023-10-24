import { Router } from "express";
import { getBanksController } from "../useCases/Banks/getbanksUseCase";

const BanksDataRouter = (router = Router()) => {
  router.get("/banks", async (req, res) => {
    return getBanksController.handle(req, res);
  });
  return router;
};

export default BanksDataRouter;
