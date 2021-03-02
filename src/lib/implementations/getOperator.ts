import { Operator } from '../../constants';
import { IgetOperator } from '../IgetOperator';
export class GetOperator implements IgetOperator {
  getOperator(phone: string): string {
    const initial = parseInt(phone.substring(4, 6));
    if (isNaN(initial)) return null;
    if (initial === 91 || initial === 99) return Operator.Movicel;
    if (initial > 91 && initial < 99) return Operator.Unitel;
    return null;
  }
}
