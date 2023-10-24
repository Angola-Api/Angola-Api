import { Request, Response } from "express";
import { GetComemorationDateUseCase } from "./GetComemorationUseCase";

export class GetComemorativeDateController {
  constructor(
    private readonly getComemorationUseCase: GetComemorationDateUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { ComemorativeDates } = request.query;
      const bank = await this.getComemorationUseCase.execute();
      return response.status(200).json(bank);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
