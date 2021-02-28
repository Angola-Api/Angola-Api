import { ValidateBi } from './validateBi';

const makeSut = () => ({ sut: new ValidateBi() });

describe('Validate Phone', () => {
  it('returns true if is an Angola valid Bi', () => {
    const { sut } = makeSut();
    expect(sut.validate('123456789la324')).toBeTruthy();
    expect(sut.validate('123456789LA123')).toBeTruthy();
    expect(sut.validate('432345679LA133')).toBeTruthy();
  });
  it('returns false if is an Angola valid Bi', () => {
    const { sut } = makeSut();
    expect(sut.validate('12345678913324')).toBeFalsy();
    expect(sut.validate('123456789L3123')).toBeFalsy();
    expect(sut.validate('4323456793A133')).toBeFalsy();
    expect(sut.validate('432345679LA1332')).toBeFalsy();
  });
});
