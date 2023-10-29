import express, { Express } from "express";
import indexRouter from "../routers/IndexRouter";
import ValidatePhoneRouter from "../routers/ValidatePhoneRouters";
import ProvinceRouter from "../routers/ProvinceRouter";
import MunicipioRouter from "../routers/MunicipioRoutes";
import banksRouter from "../routers/BanksRouter";
import ValidateBiRouter from "../routers/ValidateBiRouter";
import ValidatePassPortROuter from "../routers/ValidatePassPortRouter";
import ComemorativeRouter from "../routers/ComemorativeRouter";
import ValidateIbanRouter from '../routers/ValidateIbanRouter';


const setUpRoutes = (app: Express): void => {
  app.use(indexRouter());
  app.use("/api/v1", banksRouter());
  app.use("/api/v1/", ComemorativeRouter());
  app.use("/api/v1/", ValidateBiRouter());
  app.use("/api/v1/validate", ValidatePassPortROuter());
  app.use("/api/v1/validate", ValidatePhoneRouter());
  app.use("/api/v1/geography", ProvinceRouter());
  app.use("/api/v1/geography", MunicipioRouter());
  app.use('/api/v1', ValidateIbanRouter());
};

export default setUpRoutes;
