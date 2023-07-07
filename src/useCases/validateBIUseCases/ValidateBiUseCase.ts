import { Bi } from 'src/services/implementations/Bi';
import { IvalidateBi } from '../../lib/ivalidateBi';
import { IvalidateBiUseCase } from './IvalidateBIUserCase';
import { DataBIDTO, IvalidateBIDTO } from './ValidateBiDTO';

export class ValidateBiUseCase implements IvalidateBiUseCase {
  constructor(private validateBi: IvalidateBi, private bi: Bi) { }

  async execute(data: IvalidateBIDTO): Promise<DataBIDTO> {
    const { bi } = data;


    if (!this.validateBi.validate(bi)) {
      throw new Error("invalid identity card number");
    }


  
      const response = await this.bi.getBi(bi)
      if (response.sucess) {
        return {
          sucess: true,
          message: "This is an Angola valid identity card"
        };
      }

      throw new Error("not found identity card number");
    }
}
