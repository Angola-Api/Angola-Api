import { Router } from 'express';
import { getMunicipioController } from '../useCases/Municipio/getMunicipiosUseCase';

const MunicipioRouter = (router = Router()) => {
  router.get('/county', async (req, res) => {
    return getMunicipioController.handle(req, res);
  });
  return router;
};

export default MunicipioRouter;
