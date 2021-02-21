import { IvalidatePhone } from '../../lib/IvalidatePhone';
import { IgetOperator } from '../../lib/IgetOperator';
import { Operator } from '../../constants';
import { ValidatePhoneUserCase } from '../validatePhoneUserCases/ValidatePhoneCaserCase';

const makeValidatePhoneSub = (): IvalidatePhone => {
  class ValidatePhoneSub implements IvalidatePhone {
    validate(phone: string): boolean {
      return true;
    }
  }
  return new ValidatePhoneSub();
};

const makeGetOperatorSub = (): IgetOperator => {
  class GetOperatorSub implements IgetOperator {
    getOperator(phone: string): string {
      return Operator.Unitel;
    }
  }
  return new GetOperatorSub();
};

interface SutTypes {
  sut: ValidatePhoneUserCase;
  validatePhoneStub: IvalidatePhone;
  getOperatorStub: IgetOperator;
}

const makeSut = (): SutTypes => {
  const validatePhoneStub = makeValidatePhoneSub();
  const getOperatorStub = makeGetOperatorSub();
  const sut = new ValidatePhoneUserCase(validatePhoneStub, getOperatorStub);

  return {
    sut,
    validatePhoneStub,
    getOperatorStub,
  };
};

describe('Validate Phone User Case', () => {
  it('calls validatePhone with correct value', () => {
    const { sut, validatePhoneStub } = makeSut();
    const validationSpy = jest.spyOn(validatePhoneStub, 'validate');
    const phone = '+244936196873';
    sut.execute({ phone });
    expect(validationSpy).toHaveBeenCalledWith(phone);
  });
  it('calls getOperator with correct value', () => {
    const { sut, getOperatorStub } = makeSut();
    const getOperatorSpy = jest.spyOn(getOperatorStub, 'getOperator');
    const phone = '+244936196873';
    sut.execute({ phone });
    expect(getOperatorSpy).toHaveBeenCalledWith(phone);
  });
  it('return an opeator on success', () => {
    const { sut } = makeSut();
    const phone = '+244936196873';
    const result = sut.execute({ phone });
    expect(result).toBe(Operator.Unitel);
  });
});
