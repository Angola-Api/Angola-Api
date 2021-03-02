import {
  Puppeteer,
  RateInflationNavigator,
} from "../../services/implementations";
import { RateInflationProvider } from "../../providers/implementations/RateInflationProvider";
import { RateInflationUseCase } from "./RateInflationUseCase";
import { RateInflationUseController } from "./RateInflationUseController";

const rateInflationNavigator = new RateInflationNavigator();
const puppeteer = new Puppeteer(
  "https://www.bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=1017&idi=1018&idl=1",
  rateInflationNavigator.navigator
);
const rateInflationProvider = new RateInflationProvider(puppeteer);
const rateInflationUseCase = new RateInflationUseCase(rateInflationProvider);
const rateInflationController = new RateInflationUseController(
  rateInflationUseCase
);

export { rateInflationController };
