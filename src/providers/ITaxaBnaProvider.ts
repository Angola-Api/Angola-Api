import {TaxaBna} from '../entities/TaxaBna'
export interface ITaxaBnaProvider {
   getTaxaBna(): Promise<TaxaBna>
}