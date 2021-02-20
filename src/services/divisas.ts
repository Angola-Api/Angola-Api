import { initialize } from "./puppeteer";

export default async function Divisas() {
  const { browser, page } = await initialize();
  await page.goto(`http://www.kinguilahoje.com/`);
  const Cambio = await ExtractData(page);
  await browser.close();
  return Cambio;
}

async function ExtractData(page) {
  return await page.evaluate(() => {
    const nodeSelect = document.getElementsByClassName(
      "col-xs-12 gray-round-1px-border"
    );
    const nodeArray = [...nodeSelect];
    const arrayCambio = nodeArray.map((item) => ({
      place: (item.children[1] as HTMLElement).innerText,
      update: (item.children[2] as HTMLElement).innerText,
      dolar: (item.children[3].children[0].children[0] as HTMLElement)
        .innerText,
      dolarStatus: (item.children[3].children[0].children[1] as HTMLElement)
        .innerText,
      euro: (item.children[3].children[1].children[0] as HTMLElement).innerText,
      euroStatus: (item.children[3].children[1].children[1] as HTMLElement)
        .innerText,
    }));
    return arrayCambio;
  });
}
