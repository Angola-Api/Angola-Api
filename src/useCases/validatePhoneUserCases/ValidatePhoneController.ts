import { Request, Response } from 'express';
import { IvalidatePhoneUserCase } from './IvalidatePhoneUserCase';

export class ValidatePhoneController {
  constructor(private readonly validatePhoneUserCase: IvalidatePhoneUserCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      if (!request.params['phone'])
        return response.status(400).json({
          message:
            'missing param error, you need to pass phone number on param',
        });

      const { phone } = request.params;

      const operator = this.validatePhoneUserCase.execute({ phone });

      return response.status(200).json({
        message: 'this is an Angola valid phone number',
        operator,
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}
