import { Response, Request } from "express";
import { RateBnaUseCase } from "./RateBnaUseCase";

export class RateBnaUseController {
  constructor(private rateBnaUseCase: RateBnaUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateBnaUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
