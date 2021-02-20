import puppeteer from "puppeteer";

var browser: any;
var page: any;

const chromeOptions = {
  headless: true,
  args: ["--no-sandbox"],
};

export async function initialize() {
  browser = await puppeteer.launch(chromeOptions);
  page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
  );
  return {
    browser,
    page,
   }
}
