import {TaxaLuibor} from '../entities/TaxaLuibor'
export interface ITaxaLuiborProvider {
   getTaxasLuibor(): Promise<Array<TaxaLuibor>>
}