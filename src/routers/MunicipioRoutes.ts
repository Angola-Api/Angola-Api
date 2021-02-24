import { Router } from 'express';
import { getMunicipioController } from '../useCases/Municipio/getMunicipiosUseCase';

const MunicipioRouter = (router = Router()) => {
  router.get('/municipios', async (req, res) => {
    return getMunicipioController.handle(req, res);
  });
  return router;
};

export default MunicipioRouter;
