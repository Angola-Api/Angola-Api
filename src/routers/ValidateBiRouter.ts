import { Router } from 'express';
import { validateBIController } from '../useCases/validateBIUseCases';

const ValidateBiRouter = (router = Router()) => {
  router.get('/bi/:bi', async (req, res) => {
    return validateBIController.handle(req, res);
  });
  return router;
};

export default ValidateBiRouter;
