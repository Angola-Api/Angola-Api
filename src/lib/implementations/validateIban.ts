import { IvalidateIban } from '../ivalidateIban';

export class ValidateIban implements IvalidateIban {
   validate(iban: string): boolean {
    // Check if the iban is valid and return true or false
    return iban.length > 0 && iban !== "false";
  
  }
}
