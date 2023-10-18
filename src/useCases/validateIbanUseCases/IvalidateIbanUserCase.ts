import { DataIbanDTO, IvalidateIbanDTO } from './ValidateIbanDTO';

export interface IvalidateIbanUseCase {
  execute(data: IvalidateIbanDTO): Promise<DataIbanDTO>;
}
