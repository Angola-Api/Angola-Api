import { Request, Response } from 'express';
import { IvalidatePassPortUseCase } from './IvalidatePassPortUseCase';

export class ValidatePassPortController {
  constructor(private readonly validateBiUseCase: IvalidatePassPortUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      if (!request.params['passport'])
        return response.status(400).json({
          message:
            'missing param error, you need to pass passport number on param',
        });

      const { passport } = request.params;

      const result = this.validateBiUseCase.execute({ passport });

      return response.status(200).json({
        message: result,
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}
