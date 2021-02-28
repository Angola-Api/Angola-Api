import { INavigator } from "../INavigator";

export class RateTermDepositNavigator implements INavigator {
  constructor() {}
  navigator() {
    const nodeSelectData = document.getElementsByClassName("BNA-data");
    const nodeSelectArrayRates = document.querySelectorAll(
      "div.panel-body table tbody"
    );

    const nodeArrayData = [...nodeSelectData];
    const nodeArrayTable = [...nodeSelectArrayRates];
    console.log(nodeArrayTable);
    let banks = [].slice
      .call(nodeArrayTable[2]?.children)
      .map((children, index) => {
        if (index > 0)
          return {
            name: (children.children[0] as HTMLElement)?.innerText,
            rates: [
              {
                days: 30,
                rate: (children.children[1] as HTMLElement)?.innerText,
              },
              {
                days: 90,
                rate: (children.children[2] as HTMLElement)?.innerText,
              },
              {
                days: 360,
                rate: (children.children[3] as HTMLElement)?.innerText,
              },
            ],
          };
      });
    banks.shift();
    banks.shift();
    return {
      date: (nodeArrayData[0] as HTMLElement)?.innerText,
      banks,
    };
  }
}
