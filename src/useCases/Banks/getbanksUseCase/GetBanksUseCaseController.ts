import { Request, Response } from "express";
import { GetBanksUseCase } from "./GetBanksUseCase";

export class GetBanksController {
  constructor(private readonly getBanksUseCase: GetBanksUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { banks } = request.query;
      const bank = await this.getBanksUseCase.execute();
      return response.status(200).json(bank);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
