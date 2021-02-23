interface coin {
  buy: [
    {
      currency: string;
      quotation: number;
    }
  ];
  sell: [
    {
      currency: string;
      quotation: number;
    }
  ];
}

interface coinVariation {
  buy: [
    {
      currency: string;
      variation: string;
    }
  ];
  sell: [
    {
      currency: string;
      variation: string;
    }
  ];
}

export class RateComercialExchange {
  public date: string;
  public banks: Array<{
    name: string;
    current: coin;
    lastDay: coin;
    variation: coinVariation;
  }>;

  constructor(props) {
    Object.assign(this, props);
  }
}
