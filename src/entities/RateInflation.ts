export class RateInflation{
  public date : string
  public status : string
  public rates : Array<{
     type: string
     maturity: string
  }>
 
  constructor(props){
    Object.assign(this, props);
  }
}