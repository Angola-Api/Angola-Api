import { IvalidateBi } from '../ivalidateBi';

export class ValidateBi implements IvalidateBi {
  validate(bi: string): boolean {
    const regex = /\d{9}[A-Za-z]{2}\d{3}$/;
    return regex.test(bi);
  }
}
