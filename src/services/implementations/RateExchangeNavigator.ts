import {INavigator} from '../INavigator'

export class RateExchangeNavigator implements INavigator {
  constructor(){
    
  }
   navigator() {
    const nodeSelectArrayRates = document.querySelectorAll(
      "div#collapsecambios.collapse table tbody"
    );

    const nodeArrayTable = [...nodeSelectArrayRates];

    let rates = [].slice.call(nodeArrayTable[0].children).map((children) => ({
      currency: (children.children[0] as HTMLElement).innerText,
      rate: parseFloat((children.children[1] as HTMLElement).innerText.replace(",",".")),
    }));
    rates.shift();
    return {
      rates
    };
  }
} 