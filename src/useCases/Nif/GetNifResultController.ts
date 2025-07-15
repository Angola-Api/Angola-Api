import { Request, Response } from "express";
import { IGetNifResultUseCase } from "./IGetNifResultUseCase";

export class GetNifResultController {
  constructor(private getNifResultUseCase : IGetNifResultUseCase) {}

  async execute(request: Request, response: Response): Promise<Response> {
   try{
    const { nif } = request.params;

    const nifDataResult = await this.getNifResultUseCase.execute(nif);
    return response.status(200).json(nifDataResult);
   }catch(error){
      return response.status(404).json({ Message: "Nif não encotrado" });
   }
  }
}
