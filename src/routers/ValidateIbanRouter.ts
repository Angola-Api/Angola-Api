import { Router } from 'express';
import { validateIbanController } from '../useCases/validateIbanUseCases';

const ValidateIbanRouter = (router = Router()) => {
  router.get('/iban/:iban', async (req, res) => {
    return validateIbanController.handle(req, res);
  });
  return router;
};

export default ValidateIbanRouter;
