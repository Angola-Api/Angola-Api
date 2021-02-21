import { ValidatePhone } from './validatePhone';

const makeSut = () => ({ sut: new ValidatePhone() });

describe('Validate Phone', () => {
  it('returns true if is an Angola valid phone number', () => {
    const { sut } = makeSut();
    expect(sut.validate('+244936196873')).toBeTruthy();
    expect(sut.validate('+244916196873')).toBeTruthy();
    expect(sut.validate('+244996196873')).toBeTruthy();
  });
  it('returns false if is not an Angola valid phone number', () => {
    const { sut } = makeSut();
    expect(sut.validate('+344936196873')).toBeFalsy();
    expect(sut.validate('+24491619687')).toBeFalsy();
    expect(sut.validate('+341996196873')).toBeFalsy();
  });
});
