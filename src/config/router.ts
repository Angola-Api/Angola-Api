import { Express } from 'express';
import banksRateRouter from '../routers/banks-rate-roter';

const setUpRoutes = (app: Express): void => {
  app.use('/api/v1', banksRateRouter());
};

export default setUpRoutes;
