import { IgetOperator } from '../IgetOperator';

export class GetOperator implements IgetOperator {

  private static readonly MobilePhoneOperators = {
    "Movicel": [99, 91],
    "Unitel": [92, 93, 94],
    "Africell": [95]
  }

  getOperator(phone: string): string{
    const prefix = parseInt(phone.substring(4, 6));
      if (isNaN(prefix)) return null;

      for (const operator in GetOperator.MobilePhoneOperators) {
        if (GetOperator.MobilePhoneOperators[operator].includes(prefix)) {
          return operator;
        }
      }

      return null;
  }
}
