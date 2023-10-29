import { GetOperator } from './getOperator';
import { Operator } from '../../constants';
const makeSut = () => ({ sut: new GetOperator() });

describe('GetOPerator', () => {
  it('returns null if initial if not a number', () => {
    const { sut } = makeSut();
    expect(sut.getOperator('+244ab926196873')).toBeNull();
  });
  it('returns null if not an Angola valid phone number', () => {
    const { sut } = makeSut();
    expect(sut.getOperator('+244826196873')).toBeNull();
  });
  it('returns Movicel if is an Movicel phone number', () => {
    const { sut } = makeSut();
    expect(sut.getOperator('+244996213456')).toBe(Operator.Movicel);
    expect(sut.getOperator('+244916213456')).toBe(Operator.Movicel);
  });
  it('returns Unitel if is an Unitel phone number', () => {
    const { sut } = makeSut();
    expect(sut.getOperator('+244924213456')).toBe(Operator.Unitel);
    expect(sut.getOperator('+244934213456')).toBe(Operator.Unitel);
    expect(sut.getOperator('+244944213456')).toBe(Operator.Unitel);
    expect(sut.getOperator('+244954213456')).toBe(Operator.Africell);
  });
});
