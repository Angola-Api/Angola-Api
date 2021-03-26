import { INavigator } from '../INavigator';

class RateBnaNavigator implements INavigator {
  constructor() { }
  navigator() {
    const nodeSelect = document.getElementsByClassName(
      "BNA-body-mod collapse table"
    );
    const nodeArray = [...nodeSelect];
    let rate = (nodeArray[0].children[0].children[0].children[0]
      .children[1] as HTMLElement)?.innerText;
    rate = rate.replace("\n", "")
    return {
      rate
    }
  }
}

export default RateBnaNavigator;