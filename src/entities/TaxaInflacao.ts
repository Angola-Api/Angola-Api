export class TaxaInflacao{
  public date : string
  public status : string
  public taxas : Array<{
     tipo: string
     maturidade: string
  }>
 
  constructor(props){
    Object.assign(this, props);
  }
}