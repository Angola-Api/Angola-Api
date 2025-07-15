import { Nif } from "src/entities/Nif";
import { INif } from "../INif";
import puppeteer from 'puppeteer';


export default class NifService implements INif{

async  consultarNif(nif: string): Promise<Nif> {
  const browser = await puppeteer.launch({ headless: true, args: ['--disable-dev-shm-usage', '--no-sandbox'], });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (request) => {
      const resourceType = request.resourceType();
      if (['image', 'stylesheet', 'font'].includes(resourceType)) {
        request.abort();
      } else {
        request.continue();
      }
    });
try {
  
  await page.goto('https://portaldocontribuinte.minfin.gov.ao/consultar-nif-do-contribuinte', {
      timeout: 60000, 
      waitUntil: 'domcontentloaded',
    });
  await page.waitForSelector('input[id="j_id_2x:txtNIFNumber"]');
  await page.type('input[id="j_id_2x:txtNIFNumber"]', nif);
  await page.click('button[id="j_id_2x:j_id_34"]');
  await page.waitForSelector('div.panel-default-header', { timeout: 10000 }); 
  const resultado = await page.evaluate(() => {
      const getText = (labelSelector: string): string => {
        const labelElement = document.querySelector(labelSelector);
        return labelElement?.textContent?.trim() || '';
      };
    
      const nif = getText('#taxPayerNidId');
      const nome = getText('div.form-group:nth-child(3) .col-sm-6:last-child label');
      const tipo = getText('div.form-group:nth-child(4) .col-sm-6:last-child label');
      const estado = getText('div.form-group:nth-child(5) .col-sm-6:last-child label');
      const regimeIva = getText('div.form-group:nth-child(6) .col-sm-6:last-child label');
      const residenciaFiscal = getText('div.form-group:nth-child(7) .col-sm-6:last-child label');
    
      return { nif, nome, tipo, estado, regimeIva, residenciaFiscal };
    });
    

  await browser.close();

  return resultado as Nif;
} catch (error) {
  throw new Error('NIF inválido');
}
}
}