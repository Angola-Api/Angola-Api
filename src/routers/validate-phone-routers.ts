import { Router } from 'express';
import { validatePhoneController } from '../useCases/validate-phone-use-cases';

const ValidatePhoneRouter = (router = Router()) => {
  router.get('/validatePhone/:phone', async (req, res) => {
    return validatePhoneController.handle(req, res);
  });

  return router;
};

export default ValidatePhoneRouter;
