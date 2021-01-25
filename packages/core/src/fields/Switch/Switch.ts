export class Switch {
  private _selector: string;

  constructor(selector: string) {
    // s
    this._selector = selector;

    const obj1 = {
      arr: [1, 2, 3, 4],
    };
    const obj2 = {
      a: 2,
      b: 4,
    };
    const obj3 = { ...obj1, ...obj2 };

    const { arr } = obj3;

    let sum = 0;
    arr.forEach((item) => {
      sum += item;
    });
    console.log('sum', sum);
  }

  async atest1(): Promise<void> {
    const result = await this.atest2();
    console.log(result);
  }

  async atest2(): Promise<number> {
    return 3 + 42;
  }

  max(a: number, b: number): number {
    return a > b ? a : b;
  }

  min(a: number, b: number): number {
    return a < b ? a : b;
  }

  get selector(): string {
    return this._selector;
  }
}

export default Switch;
