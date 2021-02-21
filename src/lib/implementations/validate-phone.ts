import { IvalidatePhone } from '../ivalidate-phone';

export class ValidatePhone implements IvalidatePhone {
  validate(phone: string): boolean {
    return /^(\+244)\d{9}$/.test(phone);
  }
}
