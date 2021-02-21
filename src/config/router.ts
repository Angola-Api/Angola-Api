import { Express } from 'express';
import ValidatePhoneRouter from '../routers/validate-phone-routers';
import banksRateRouter from '../routers/banks-rate-roter';

const setUpRoutes = (app: Express): void => {
  app.use('/api/v1', banksRateRouter());
  app.use('/api/v1', ValidatePhoneRouter());
};

export default setUpRoutes;
