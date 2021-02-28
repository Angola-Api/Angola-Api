import { Router } from 'express';
import { validatePhoneController } from '../useCases/validatePhoneUseCases';

const ValidatePhoneRouter = (router = Router()) => {
  router.get('/phone/:phone', async (req, res) => {
    return validatePhoneController.handle(req, res);
  });
  return router;
};

export default ValidatePhoneRouter;
