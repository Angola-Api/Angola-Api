import { IvalidatePhone } from '../../lib/ivalidate-phone';
import { IgetOperator } from '../../lib/iget-operator';
import { IvalidatePhoneDTO } from './validate-phone-dto';
import { IvalidatePhoneUserCase } from './ivalidate-phone-user-case';

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
