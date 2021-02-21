import puppeteer from "puppeteer";

const chromeOptions = {
  headless: !false,
  args: ["--no-sandbox"],
};

export class Puppeteer {
  public browser: any;
  public page: any;
  constructor() {}

  async openBrowser(url: string) {
    this.browser = await puppeteer.launch(chromeOptions);
    this.page = await this.browser.newPage();
    await this.page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
    );
    return await this.page.goto(url);
  }

  private async closeBrowser() {
    return await this.browser.close();
  }

  async extractData(url: string, navigator: Function) {
    await this.openBrowser(url);
    let externalFunction = Object.assign(navigator);
    let navigateResult = await this.page.evaluate(externalFunction);
    await this.closeBrowser();
    return navigateResult;
  }
}
