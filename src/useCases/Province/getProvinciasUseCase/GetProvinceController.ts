import { Request, Response } from 'express';
import { GetProvinceUseCase } from './GetProvinceUseCase';

export class GetProvinceController {
  constructor(private readonly getProvinceUseCase: GetProvinceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const provinces = await this.getProvinceUseCase.execute();
      
      return response.status(200).json(provinces);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}
