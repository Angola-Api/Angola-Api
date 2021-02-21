export class RateExchange {
  public rates : Array<{
     rate: number
     currency: string
  }>
 
  constructor(props){
    Object.assign(this, props);
  }
}