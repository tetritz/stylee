(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Stylee = {}));
}(this, (function (exports) { 'use strict';

  class Switch {
      constructor(selector) {
          // s
          this._selector = selector;
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
          return 3 + 42;
      }
      max(a, b) {
          return a > b ? a : b;
      }
      min(a, b) {
          return a < b ? a : b;
      }
      get selector() {
          return this._selector;
      }
  }

  const add = (a, b) => a + b;

  exports.Fields = Switch;
  exports.Switch = Switch;
  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=stylee.js.map
