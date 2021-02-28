import { IvalidateBIDTO } from './ValidateBiDTO';

export interface IvalidateBiUseCase {
  execute(data: IvalidateBIDTO): string;
}
