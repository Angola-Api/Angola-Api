import { Response, Request } from "express";
import { RateExchangeUseCase } from "./RateExchangeUseCase";

export class RateExchangeUseController {
  constructor(private rateExchangeUseCase: RateExchangeUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateExchangeUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
