import { Response, Request } from "express";
import { RateInflationUseCase } from "./RateInflationUseCase";

export class RateInflationUseController {
  constructor(private rateInflationUseCase: RateInflationUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateInflationUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
