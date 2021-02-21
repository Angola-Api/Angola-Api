import {IRateBnaProvider} from '../../providers/IRateBnaProvider'

export class RateBnaUseCase {
  constructor(private rateBnaProvider : IRateBnaProvider){}

  async execute(){
    return await this.rateBnaProvider.getRateBna();
  } 
}