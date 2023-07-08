import { DataBIDTO, IvalidateBIDTO } from './ValidateBiDTO';

export interface IvalidateBiUseCase {
  execute(data: IvalidateBIDTO): Promise<DataBIDTO>;
}
