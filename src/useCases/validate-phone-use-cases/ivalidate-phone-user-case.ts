import { IvalidatePhoneDTO } from './validate-phone-dto';

export interface IvalidatePhoneUserCase {
  execute(data: IvalidatePhoneDTO): string;
}
