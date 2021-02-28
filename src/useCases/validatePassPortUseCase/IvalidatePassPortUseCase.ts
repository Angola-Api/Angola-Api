import { IvalidatePassPortDTO } from './ValidatePassPortDTO';

export interface IvalidatePassPortUseCase {
  execute(data: IvalidatePassPortDTO): string;
}
