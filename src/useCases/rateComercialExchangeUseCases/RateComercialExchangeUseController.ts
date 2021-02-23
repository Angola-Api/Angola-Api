import { Response, Request } from "express";
import { RateComercialExchangeUseCase } from "./RateComercialExchangeUseCase";

export class RateComercialExchangeUseController {
  constructor(private rateComercialExchangeUseCase: RateComercialExchangeUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateComercialExchangeUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
