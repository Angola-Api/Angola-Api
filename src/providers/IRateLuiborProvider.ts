import {RateLuibor} from '../entities/RateLuibor'
export interface IRateLuiborProvider {
   getRateLuibor(): Promise<RateLuibor>
}