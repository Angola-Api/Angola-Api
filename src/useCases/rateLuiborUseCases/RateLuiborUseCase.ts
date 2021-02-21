import {IRateLuiborProvider} from '../../providers/IRateLuiborProvider'

export class RateLuiborUseCase {
  constructor(private rateLuiborProvider : IRateLuiborProvider){}

  async execute(){
    return await this.rateLuiborProvider.getRateLuibor();
  } 
}