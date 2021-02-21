import {TaxaInflacao} from '../entities/TaxaInflacao'
export interface ITaxaInflacaoProvider {
   getTaxaBna(): Promise<TaxaInflacao>
}