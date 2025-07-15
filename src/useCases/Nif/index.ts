import NifService from "src/services/implementations/Nif";
import { GetNifResultController } from "./GetNifResultController";
import GetNifResultUseCase from "./GetNifResultUseCase";


const nifService = new NifService();
const getNifResultUseCase  = new GetNifResultUseCase(nifService)
export const getNifResultController = new GetNifResultController(getNifResultUseCase);
