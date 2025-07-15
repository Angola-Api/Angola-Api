import { Router } from "express";
import { getNifResultController } from "src/useCases/Nif";

const NifRouter = (router = Router()) => {
  router.get("/nif/:nif", async (req, res) => {
    return getNifResultController.execute(req, res);
  });
  return router;
};

export default NifRouter;
