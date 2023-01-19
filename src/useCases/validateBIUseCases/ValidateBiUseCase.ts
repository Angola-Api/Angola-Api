import { IvalidateBi } from '../../lib/ivalidateBi';
import { IvalidateBiUseCase } from './IvalidateBIUserCase';
import { IvalidateBIDTO } from './ValidateBiDTO';

export class ValidateBiUseCase implements IvalidateBiUseCase {
  constructor(private validateBi: IvalidateBi) {}

  execute(data: IvalidateBIDTO): string {
    const { bi } = data;

    if (!this.validateBi.validate(bi)) throw new Error('Invalid identity card');

    return 'This is an Angola valid identity card';
  }
}
