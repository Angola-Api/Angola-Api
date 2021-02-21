import { Express } from 'express';
import ValidatePhoneRouter from '../routers/ValidatePhoneRouters';
import banksRateRouter from '../routers/BanksRateRoter';

const setUpRoutes = (app: Express): void => {
  app.use('/api/v1', banksRateRouter());
  app.use('/api/v1', ValidatePhoneRouter());
};

export default setUpRoutes;
