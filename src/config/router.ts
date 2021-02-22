import { Express } from 'express';
import ValidatePhoneRouter from '../routers/ValidatePhoneRouters';
import banksRateRouter from '../routers/BanksRateRoter';
import ProvinceRouter from '../routers/ProvinceRouter';

const setUpRoutes = (app: Express): void => {
  app.use('/api/v1', banksRateRouter());
  app.use('/api/v1', ValidatePhoneRouter());
  app.use('/api/v1', ProvinceRouter());
};

export default setUpRoutes;
