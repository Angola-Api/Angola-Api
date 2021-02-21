
export interface IPuppeteer {
  extractData(url: string , navigator: Function): Promise<any> 
}