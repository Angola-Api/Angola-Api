import { ValidatePassPort } from './validatePassPort';

const makeSut = () => ({ sut: new ValidatePassPort() });

describe('Validate Phone', () => {
  it('returns true if is an Angola Passport', () => {
    const { sut } = makeSut();
    expect(sut.validate('N1232435')).toBeTruthy();
    expect(sut.validate('N7202425')).toBeTruthy();
    expect(sut.validate('N9212135')).toBeTruthy();
  });
  it('returns false if is an Angola Passport', () => {
    const { sut } = makeSut();
    expect(sut.validate('A1232435')).toBeFalsy();
    expect(sut.validate('B7202425')).toBeFalsy();
    expect(sut.validate('C9212135')).toBeFalsy();
  });
});
