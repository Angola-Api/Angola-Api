import { Request, Response } from "express";
import { GetOneProvinceUseCase } from "./GetOneProvinceUseCase";

export class GetOneProvinceController {
  constructor(private readonly getOneProvinceUseCase: GetOneProvinceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      if (!request.params["id"])
        return response.status(400).json({
          message:
            "missing param error, you need to pass phone number on param",
        });

      const { id } = request.params;

      const province = await this.getOneProvinceUseCase.execute(id);

      if (!province)
        return response.status(404).json({
          message: "Province not found",
        });

      return response.status(200).json(province);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
