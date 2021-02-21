import { Response, Request } from "express";
import { TaxasLuiborUseCase } from "./TaxasLuiborUseCase";

export class TaxasLuiborUseController {
  constructor(private taxasLuiborUseCase: TaxasLuiborUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.taxasLuiborUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
