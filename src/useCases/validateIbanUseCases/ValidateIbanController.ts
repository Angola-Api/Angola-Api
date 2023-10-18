import { Request, Response } from 'express';
import { IvalidateIbanUseCase } from './IvalidateIbanUserCase';

export class ValidateIbanController {
  constructor(private readonly validateIbanUseCase: IvalidateIbanUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      if (!request.params['iban'])
        return response.status(400).json({
          message: 'missing param error, you need to pass bi number on param',
        });

      const { iban } = request.params;
      const result = await this.validateIbanUseCase.execute({ iban });
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        sucess: false,
        message: error.message || 'Unexpected error',
      });
    }
  }
}
