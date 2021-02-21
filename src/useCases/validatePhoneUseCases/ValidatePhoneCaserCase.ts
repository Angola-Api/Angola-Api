import { IvalidatePhone } from '../../lib/IvalidatePhone';
import { IgetOperator } from '../../lib/IgetOperator';
import { IvalidatePhoneDTO } from './ValidatePhoneDTO';
import { IvalidatePhoneUserCase } from './IvalidatePhoneUserCase';

export class ValidatePhoneUserCase implements IvalidatePhoneUserCase {
  constructor(
    private validatePhone: IvalidatePhone,
    private getOperator: IgetOperator
  ) {}

  execute(data: IvalidatePhoneDTO): string {
    const { phone } = data;

    if (!this.validatePhone.validate(phone))
      throw new Error('Invalid phone number');

    return this.getOperator.getOperator(phone);
  }
}
