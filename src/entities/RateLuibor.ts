export class RateLuibor {
  public date : string
  public rates : Array<{
     rate: string
     maturity: string
  }>
 
  constructor(props){
    Object.assign(this, props);
  }
}