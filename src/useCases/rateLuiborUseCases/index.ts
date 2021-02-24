import { Puppeteer, RateLuiborNavigator } from "../../services/implementations";
import { RateLuiborProvider } from "../../providers/implementations/RateLuiborProvider";
import { RateLuiborUseCase } from "./RateLuiborUseCase";
import { RateLuiborUseController } from "./RateLuiborUseController";

const rateLuiborNavigator = new RateLuiborNavigator();
const puppeteer = new Puppeteer(
  "https://www.bna.ao/Conteudos/Artigos/detalhe_artigo.aspx?idc=378&idi=380&idl=1",
  rateLuiborNavigator.navigator
);
const rateLuiborProvider = new RateLuiborProvider(puppeteer);
const rateLuiborUseCase = new RateLuiborUseCase(rateLuiborProvider);
const rateLuiborController = new RateLuiborUseController(rateLuiborUseCase);

export { rateLuiborController };
