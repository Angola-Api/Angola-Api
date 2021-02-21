import { Response, Request } from "express";
import { RateForwardExchangeUseCase } from "./RateForwardExchangeUseCase";

export class RateForwardExchangeUseController {
  constructor(private rateForwardExchangeUseCase: RateForwardExchangeUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateForwardExchangeUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
