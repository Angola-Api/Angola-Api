import { Request, Response } from 'express';
import { IvalidatePhoneUserCase } from './ivalidate-phone-user-case';

export class ValidatePhoneController {
  constructor(private readonly validatePhoneUserCase: IvalidatePhoneUserCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      if (!request.body['phone'])
        return response.status(400).json({ message: 'missing param error' });

      const { phone } = request.body;

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
