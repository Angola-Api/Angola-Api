import { Iban } from 'src/services/implementations/Iban';
import { IvalidateIban } from '../../lib/ivalidateIban';
import { IvalidateIbanUseCase } from './IvalidateIbanUserCase';
import { DataIbanDTO, IvalidateIbanDTO } from './ValidateIbanDTO';

export class ValidateIbanUseCase implements IvalidateIbanUseCase {
  constructor(private validateIban: IvalidateIban, private iban: Iban) {}

  async execute(data: IvalidateIbanDTO): Promise<DataIbanDTO> {
    const { iban } = data;

    if (!this.validateIban.validate(iban)) {
      throw new Error("invalid identity card number");
    }

      /*Resposta da validação*/
      const response = await this.iban.getIban(iban)
      if (response){
        return response
      }else{
           throw new Error("Ocorreu um erro inesperado");
      }
  }
  
}
