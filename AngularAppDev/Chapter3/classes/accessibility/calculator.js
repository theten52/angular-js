"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
// 计时器类
var Calculator = /** @class */ (function () {
    function Calculator(precision) {
        this.precision = 2;
        this.precision = precision;
    }
    Object.defineProperty(Calculator, "maxOperand", {
        // 读取私有属性_maxOperand的公共读取器
        get: function () {
            return this._maxOperand;
        },
        enumerable: false,
        configurable: true
    });
    // 受保护的操作数检查方法
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
//# sourceMappingURL=calculator.js.map