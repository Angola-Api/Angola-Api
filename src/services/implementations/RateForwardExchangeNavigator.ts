import {INavigator} from '../INavigator'

export class RateForwardExchangeNavigator implements INavigator {
  constructor(){}
   navigator() {
    const nodeSelectArrayRates = document.querySelectorAll(
      "div#collapsetaxas.BNA-body-mod.collapse tbody"
    );

    const nodeArrayTable = [...nodeSelectArrayRates];
    let rates = [].slice.call(nodeArrayTable[1].children).map((children) => ({
      maturity: (children.children[0] as HTMLElement)?.innerText,
      rate: parseFloat((children.children[1] as HTMLElement)?.innerText.replace(",",".")),
    }));
    rates.shift();
    rates.pop();
    return {
      rates
    };
  }
} 