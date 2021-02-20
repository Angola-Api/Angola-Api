import {TaxaLuibor} from '../entities/TaxaLuibor'
export interface ITaxasLuiborProvider {
   getTaxasLuibor(): Promise<Array<TaxaLuibor>>
}