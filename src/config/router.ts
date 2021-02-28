import { Express } from 'express';
import ValidatePhoneRouter from '../routers/ValidatePhoneRouters';
import ProvinceRouter from '../routers/ProvinceRouter';
import MunicipioRouter from '../routers/MunicipioRoutes';
import banksRouter from '../routers/BanksRouter';

const setUpRoutes = (app: Express): void => {
  app.use('/api/v1', banksRouter());
  app.use('/api/v1/validate', ValidatePhoneRouter());
  app.use('/api/v1/geography', ProvinceRouter());
  app.use('/api/v1/geography', MunicipioRouter());
};

export default setUpRoutes;
