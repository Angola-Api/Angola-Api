import { Response, Request } from "express";
import { RateLuiborUseCase } from "./RateLuiborUseCase";

export class RateLuiborUseController {
  constructor(private rateLuiborUseCase: RateLuiborUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.rateLuiborUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
