import { INavigator } from "../INavigator";

export class RateComercialExchangeNavigator implements INavigator {
  constructor() {}
  navigator() {
    const nodeSelectData = document.getElementsByClassName("BNA-data");
    const nodeSelectArrayRates = document.querySelectorAll(
      "div.panel-body table tbody"
    );

    const nodeArrayData = [...nodeSelectData];
    const nodeArrayTable = [...nodeSelectArrayRates];

    let banks = [].slice
      .call(nodeArrayTable[2].children)
      .map((children, index) => {
        if (index > 3)
          return {
            name: (children.children[0] as HTMLElement).innerText,
            current: {
              buy: [
                {
                  currency: "USD/AOA",
                  quotation: parseFloat(
                    (children.children[1] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
                {
                  currency: "EUR/AOA",
                  quotation: parseFloat(
                    (children.children[2] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
              ],
              sell: [
                {
                  currency: "USD/AOA",
                  quotation: parseFloat(
                    (children.children[3] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
                {
                  currency: "EUR/AOA",
                  quotation: parseFloat(
                    (children.children[4] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
              ],
            },
            lastDay: {
              buy: [
                {
                  currency: "USD/AOA",
                  quotation: parseFloat(
                    (children.children[5] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
                {
                  currency: "EUR/AOA",
                  quotation: parseFloat(
                    (children.children[6] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
              ],
              sell: [
                {
                  currency: "USD/AOA",
                  quotation: parseFloat(
                    (children.children[7] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
                {
                  currency: "EUR/AOA",
                  quotation: parseFloat(
                    (children.children[8] as HTMLElement).innerText.replace(
                      ",",
                      "."
                    )
                  ),
                },
              ],
            },
            variation: {
              buy: [
                {
                  currency: "USD/AOA",
                  variation: (children.children[9] as HTMLElement).innerText,
                },
                {
                  currency: "EUR/AOA",
                  variation: (children.children[10] as HTMLElement).innerText,
                },
              ],
              sell: [
                {
                  currency: "USD/AOA",
                  variation: (children.children[11] as HTMLElement).innerText,
                },
                {
                  currency: "EUR/AOA",
                  variation: (children.children[12] as HTMLElement).innerText,
                },
              ],
            },
          };
      });
    banks = banks.slice(4, banks.length + 1);
    return {
      date: (nodeArrayData[0] as HTMLElement).innerText,
      banks,
    };
  }
}
