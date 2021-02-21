import {TaxaInflacao} from '../entities/TaxaInflacao'
export interface ITaxaInflacaoProvider {
   getTaxaInflacao(): Promise<TaxaInflacao>
}