class Switch {
    constructor(n) {
        // s
        this._bool1 = true;
        this._n = n;
        const obj1 = {
            arr: [1, 2, 3, 4],
        };
        const obj2 = {
            a: 2,
            b: 4,
        };
        const obj3 = Object.assign(Object.assign({}, obj1), obj2);
        const { arr } = obj3;
        let sum = 0;
        arr.forEach((item) => {
            sum += item;
        });
        console.log('sum', sum);
    }
    async atest1() {
        const result = await this.atest2();
        console.log(result);
    }
    async atest2() {
        return 3 + 4;
    }
    max(a, b) {
        return a > b ? a : b;
    }
    min(a, b) {
        return a < b ? a : b;
    }
    get n() {
        return this._n;
    }
}

const add = (a, b) => a + b;

export { Switch, add };
//# sourceMappingURL=stylee.esm.js.map
