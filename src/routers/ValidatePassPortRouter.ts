import { Router } from 'express';
import { validatePassPortCOntroller } from '../useCases/validatePassPortUseCase';

const ValidatePassPortROuter = (router = Router()) => {
  router.get('/passport/:passport', async (req, res) => {
    return validatePassPortCOntroller.handle(req, res);
  });
  return router;
};

export default ValidatePassPortROuter;
