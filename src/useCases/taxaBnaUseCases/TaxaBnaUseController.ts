import { Response, Request } from "express";
import { TaxaBnaUseCase } from "./TaxaBnaUseCase";

export class TaxaBnaUseController {
  constructor(private taxaBnaUseCase: TaxaBnaUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.taxaBnaUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
