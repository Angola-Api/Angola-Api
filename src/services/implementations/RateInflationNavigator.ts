import { INavigator } from '../INavigator';

class RateInflationNavigator implements INavigator {
  constructor() { }
  navigator() {
    const nodeSelectData = document.getElementsByClassName("BNA-data");
    const nodeSelectArrayRates = document.querySelectorAll(
      "div.panel-body table tbody"
    );

    const nodeArrayData = [...nodeSelectData];
    const nodeArrayTable = [...nodeSelectArrayRates];

    let rates = ([].slice.call(nodeArrayTable[0].children)).map((children) => ({
      type: (children.children[0] as HTMLElement)?.innerText,
      rate: (children.children[1] as HTMLElement)?.innerText,
    }));
    let status = rates[0].type;
    rates.shift();
    return {
      date: (nodeArrayData[0] as HTMLElement)?.innerText,
      status,
      rates
    };
  }
}

export default RateInflationNavigator;