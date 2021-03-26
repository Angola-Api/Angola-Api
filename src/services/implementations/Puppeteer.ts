import puppeteer from "puppeteer";

const chromeOptions = {
  headless: !false,
  args: ["--no-sandbox"],
};

class Puppeteer {
  public browser: any;
  public page: any;
  public url: string;
  public navigator: Function;
  constructor(url: string, navigator: Function) {
    this.url = url;
    this.navigator = navigator;
  }

  async openBrowser() {
    this.browser = await puppeteer.launch(chromeOptions);
    this.page = await this.browser.newPage();
    await this.page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
    );
    return await this.page.goto(this.url);
  }

  private async closeBrowser() {
    return await this.browser.close();
  }

  async extractData() {
    await this.openBrowser();
    let externalFunction = Object.assign(this.navigator);
    let navigationResult = await this.page.evaluate(externalFunction);
    await this.closeBrowser();
    return navigationResult;
  }
}

export default Puppeteer;
