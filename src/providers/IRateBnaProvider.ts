import {RateBna} from '../entities/RateBna'
export interface IRateBnaProvider {
   getRateBna(): Promise<RateBna>
}