import { Request, Response } from "express";
import { GetOneProvinceByNameUseCase } from "./GetOneProvinceByNameUseCase";

export class GetOneProvinceByNameController {
  constructor(
    private getOneProvinceByNameUseCase: GetOneProvinceByNameUseCase
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const { provincia } = request.query;

    const province = await this.getOneProvinceByNameUseCase.execute(
      (provincia as string).toLowerCase()
    );

    if (!province) {
      return response.status(404).json({ Message: "Province was not found" });
    }

    return response.status(200).json(province);
  }
}
