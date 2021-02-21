import { Puppeteer, RateTermDepositNavigator } from "../../services/implementations";
import { RateTermDepositProvider } from "../../providers/implementations/RateTermDepositProvider";
import { RateTermDepositUseCase } from "./RateTermDepositUseCase";
import { RateTermDepositUseController } from "./RateTermDepositUseController";

const rateTermDepositNavigator = new RateTermDepositNavigator();
const puppeteer = new Puppeteer(
  "https://www.bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=16674&idsc=16675&idl=1",
  rateTermDepositNavigator.navigator
);
const rateTermDepositProvider = new RateTermDepositProvider(puppeteer);
const rateTermDepositUseCase = new RateTermDepositUseCase(rateTermDepositProvider);
const rateTermDepositController = new RateTermDepositUseController(rateTermDepositUseCase);

export { rateTermDepositController };
