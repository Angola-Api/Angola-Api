import {RateInflation} from '../entities/RateInflation'
export interface IRateInflationProvider {
   getRateInflation(): Promise<RateInflation>
}