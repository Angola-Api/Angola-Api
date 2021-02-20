import {TaxaLuibor} from '../entities/TaxaLuibor'
export interface ITaxaxLuiborProvider {
   getTaxasLuibor(): Promise<Array<TaxaLuibor>>
}