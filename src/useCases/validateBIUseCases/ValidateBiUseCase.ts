import { IvalidateBi } from '../../lib/ivalidateBi';
import { IvalidateBIDTO } from './ValidateBiDTO';
import { IvalidateBiUseCase } from './IvalidateBIUserCase';

export class ValidateBiUseCase implements IvalidateBiUseCase {
  constructor(private validateBi: IvalidateBi) {}

  execute(data: IvalidateBIDTO): string {
    const { bi } = data;

    if (!this.validateBi.validate(bi)) throw new Error('Invalid bi number');

    return 'This is an Angola valid bi number';
  }
}
