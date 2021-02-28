import { IvalidatePassPort } from '../../lib/ivalidatePassport';
import { IvalidatePassPortDTO } from './ValidatePassPortDTO';
import { IvalidatePassPortUseCase } from './IvalidatePassPortUseCase';

export class ValidatePassPortUseCase implements IvalidatePassPortUseCase {
  constructor(private validatePassport: IvalidatePassPort) {}

  execute(data: IvalidatePassPortDTO): string {
    const { passport } = data;

    if (!this.validatePassport.validate(passport))
      throw new Error('Invalid passport number');

    return 'this is an Angola valid passport number';
  }
}
