export class RateTermDeposit {
  public date: string;
  public banks: Array<{
    name: string;
    rates: Array<{
      days: string;
      rate: string;
    }>;
  }>;

  constructor(props) {
    Object.assign(this, props);
  }
}
