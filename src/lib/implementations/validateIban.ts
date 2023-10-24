import { IvalidateIban } from '../ivalidateIban';

export class ValidateIban implements IvalidateIban {
   validate(iban: string): boolean {
    return iban;
  }
}
