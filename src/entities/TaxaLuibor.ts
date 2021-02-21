export class TaxaLuibor {
  public date : string
  public taxas : Array<{
     taxa: string
     maturidade: string
  }>
 
  constructor(props){
    Object.assign(this, props);
  }
}