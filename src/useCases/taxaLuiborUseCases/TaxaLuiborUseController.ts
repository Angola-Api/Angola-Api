import { Response, Request } from "express";
import { TaxaLuiborUseCase } from "./TaxaLuiborUseCase";

export class TaxaLuiborUseController {
  constructor(private taxaLuiborUseCase: TaxaLuiborUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.taxaLuiborUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
