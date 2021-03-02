import { Response, Request } from "express";
import { RateTermDepositUseCase } from "./RateTermDepositUseCase";

export class RateTermDepositUseController {
  constructor(private rateTermDepositUseCase: RateTermDepositUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateTermDepositUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
