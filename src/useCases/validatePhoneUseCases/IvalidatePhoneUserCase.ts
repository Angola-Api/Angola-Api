import { IvalidatePhoneDTO } from './ValidatePhoneDTO';

export interface IvalidatePhoneUserCase {
  execute(data: IvalidatePhoneDTO): string;
}
