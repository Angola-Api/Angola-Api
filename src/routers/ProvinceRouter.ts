import { Router } from 'express';
import {
  getProvinceController,
  getOneProvinceController,
} from '../useCases/Province';

const ProvinceRouter = (router = Router()) => {
  router.get('/provinces', async (req, res) => {
    return getProvinceController.handle(req, res);
  });
  router.get('/provinces/:id', async (req, res) => {
    return getOneProvinceController.handle(req, res);
  });
  return router;
};

export default ProvinceRouter;
