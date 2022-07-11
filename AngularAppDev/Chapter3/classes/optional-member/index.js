"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // 可选的减法计算方法
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    // 可选的最小操作数获取静态方法
    Calculator.getMinOperand = function () {
        return this.minOperand;
    };
    return Calculator;
}());
// 使用可选属性
var calculator = new Calculator();
calculator.precision = undefined;
Calculator.maxOperand = undefined;
var precision = calculator.precision;
var maxOperand = Calculator.maxOperand;
calculator.add(1, 2);
calculator.subtract(1, 2);
Calculator.getMaxOperand();
Calculator.getMinOperand();
calculator.add = function (x, y) { return x + y; };
calculator.add(1, 2);
//# sourceMappingURL=index.js.map