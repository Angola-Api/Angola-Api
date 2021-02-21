import { Router } from 'express';
import { validatePhoneController } from '../useCases/validatePhoneUserCases';

const ValidatePhoneRouter = (router = Router()) => {
  router.get('/validate-phone/:phone', async (req, res) => {
    return validatePhoneController.handle(req, res);
  });
  return router;
};

export default ValidatePhoneRouter;
