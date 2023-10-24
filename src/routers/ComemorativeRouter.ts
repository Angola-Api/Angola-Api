import { Router } from "express";
import { getComemorativeController } from "../useCases/Comemoration/getComemorationDatesUseCase";

const BanksDataRouter = (router = Router()) => {
  router.get("/Comemorative", async (req, res) => {
    return getComemorativeController.handle(req, res);
  });
  return router;
};

export default BanksDataRouter;
