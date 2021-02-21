import { Router } from "express";
import { rateBnaController } from "../useCases/rateBnaUseCases";
import { rateLuiborController } from "../useCases/rateLuiborUseCases";
import { rateInflationController } from "../useCases/rateInflationUseCases";
import { rateExchangeController } from "../useCases/rateExchangeUseCases";
import { rateForwardExchangeController } from "../useCases/rateForwardExchangeUseCases";
import { rateTermDepositController } from "../useCases/rateTermDepositUseCases";

const banksRouter = (router = Router()) => {
  router.get("/banks/rates/interest/bna", async (req, res) => {
    return rateBnaController.handle(req, res);
  });

  router.get("/banks/rates/interest/luibor", async (req, res) => {
    return rateLuiborController.handle(req, res);
  });

  router.get("/banks/rates/interest/term-deposit", async (req, res) => {
    return rateTermDepositController.handle(req, res);
  });

  router.get("/banks/rates/inflation", async (req, res) => {
    return rateInflationController.handle(req, res);
  });

  router.get("/banks/rates/exchange", async (req, res) => {
    return rateExchangeController.handle(req, res);
  });
  router.get("/banks/rates/forward-exchange/", async (req, res) => {
    return rateForwardExchangeController.handle(req, res);
  });

  return router;
};

export default banksRouter;
