import { Request, Response } from 'express';
import { GetMunicipioUseCase } from './GetMunicipiosUseCase';

export class GetMunicipioController {
  constructor(private readonly getMunicipioUseCase: GetMunicipioUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { provincia } = request.query;
      const provinces = await this.getMunicipioUseCase.execute(
        provincia as string
      );
      return response.status(200).json(provinces);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}
