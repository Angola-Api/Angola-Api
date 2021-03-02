import { Request, Response } from 'express';
import { IvalidateBiUseCase } from './IvalidateBIUserCase';

export class ValidateBiController {
  constructor(private readonly validateBiUseCase: IvalidateBiUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      if (!request.params['bi'])
        return response.status(400).json({
          message: 'missing param error, you need to pass bi number on param',
        });

      const { bi } = request.params;

      const result = this.validateBiUseCase.execute({ bi });

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
