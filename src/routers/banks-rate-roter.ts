import { Router } from 'express';
import { rateBnaController } from '../useCases/rateBnaUseCases';
import { rateLuiborController } from '../useCases/rateLuiborUseCases';
import { rateInflationController } from '../useCases/rateInflationUseCases';
import { rateExchangeController } from '../useCases/rateExchangeUseCases';
import { rateForwardExchangeController } from '../useCases/rateForwardExchangeUseCases';

const banksRateRouter = (router = Router()) => {
  router.get('/banks/rate/interest/bna', async (req, res) => {
    return rateBnaController.handle(req, res);
  });

  router.get('/banks/rate/interest/luibor', async (req, res) => {
    return rateLuiborController.handle(req, res);
  });

  router.get('/banks/rate/inflation', async (req, res) => {
    return rateInflationController.handle(req, res);
  });

  router.get('/banks/rate/exchange', async (req, res) => {
    return rateExchangeController.handle(req, res);
  });
  router.get('/banks/rate/forward-exchange/', async (req, res) => {
    return rateForwardExchangeController.handle(req, res);
  });
  return router;
};

export default banksRateRouter;
