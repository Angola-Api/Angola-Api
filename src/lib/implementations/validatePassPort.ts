import { IvalidatePassPort } from '../ivalidatePassport';

export class ValidatePassPort implements IvalidatePassPort {
  validate(passport: string): boolean {
    const regex = /[nN]{1}\d{7}$/;
    return regex.test(passport);
  }
}
