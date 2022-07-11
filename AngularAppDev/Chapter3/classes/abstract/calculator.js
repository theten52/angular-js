"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
// 抽象的计时器类
var Calculator = /** @class */ (function () {
    function Calculator(precision) {
        if (precision === void 0) { precision = 2; }
        this.precision = precision;
    }
    Object.defineProperty(Calculator, "maxOperand", {
        get: function () {
            return this._maxOperand;
        },
        enumerable: false,
        configurable: true
    });
    Calculator.prototype.checkOperands = function (x, y) {
        if (x > Calculator.maxOperand || x < Calculator.minOperand) {
            console.log('操作数x超出了可计算数的范围');
            return false;
        }
        if (y > Calculator.maxOperand || y < Calculator.minOperand) {
            console.log('操作数y超出了可计算数的范围');
            return false;
        }
        return true;
    };
    Calculator._maxOperand = 100;
    Calculator.minOperand = -100;
    return Calculator;
}());
exports.Calculator = Calculator;
// let calculator: Calculator = new Calculator(); // 错误：无法创建抽象类的实例
//# sourceMappingURL=calculator.js.map