export class RateForwardExchange {
  public rate : number;
  public maturity: string
 
  constructor(props){
    Object.assign(this, props);
  }
}