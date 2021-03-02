import { Puppeteer, RateComercialExchangeNavigator } from "../../services/implementations";
import { RateComercialExchangeProvider } from "../../providers/implementations/RateComercialExchangeProvider";
import { RateComercialExchangeUseCase } from "./RateComercialExchangeUseCase";
import { RateComercialExchangeUseController } from "./RateComercialExchangeUseController";


const rateComercialExchangeNavigator = new RateComercialExchangeNavigator();
const puppeteer = new Puppeteer(
  "https://bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=161&idsc=223&idi=16622&idl=1",
  rateComercialExchangeNavigator.navigator
);
const rateComercialExchangeProvider = new RateComercialExchangeProvider(puppeteer);
const rateComercialExchangeUseCase = new RateComercialExchangeUseCase(rateComercialExchangeProvider);
const rateComercialExchangeController = new RateComercialExchangeUseController(rateComercialExchangeUseCase);

export { rateComercialExchangeController };
