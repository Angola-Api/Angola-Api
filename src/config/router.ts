import { Express } from 'express';
import ValidatePhoneRouter from '../routers/ValidatePhoneRouters';
import banksRouter from '../routers/BanksRouter';

const setUpRoutes = (app: Express): void => {
  app.use('/api/v1', banksRouter());
  app.use('/api/v1', ValidatePhoneRouter());
};

export default setUpRoutes;
