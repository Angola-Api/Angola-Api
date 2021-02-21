import { IvalidatePhoneDTO } from './ValidatePhone-dto';

export interface IvalidatePhoneUserCase {
  execute(data: IvalidatePhoneDTO): string;
}
