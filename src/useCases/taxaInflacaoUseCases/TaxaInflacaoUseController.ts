import { Response, Request } from "express";
import { TaxaInflacaoUseCase } from "./TaxaInflacaoUseCase";

export class TaxaInflacaoUseController {
  constructor(private taxaInflacaoUseCase: TaxaInflacaoUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      return res.json(await this.taxaInflacaoUseCase.execute());
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
