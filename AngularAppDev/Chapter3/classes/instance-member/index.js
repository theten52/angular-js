"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 计时器类
var Calculator = /** @class */ (function () {
    function Calculator(maxOperand, minOperand) {
        this._precision = 2;
        this.maxOperand = maxOperand;
        this.minOperand = minOperand;
    }
    /**
     * 加法
     * @param x 加数
     * @param y 加数
     */
    Calculator.prototype.add = function (x, y) {
        var areOperandsLegal = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }
        var fixed = (x + y).toFixed(this._precision); // 保留指定位数的小数
        return +fixed; // 将字符串转换成数字
    };
    /**
     * 减法
     * @param x 被减数
     * @param y 减数
     */
    Calculator.prototype.subtract = function (x, y) {
        var areOperandsLegal = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }
        var fixed = (x - y).toFixed(this._precision); // 保留指定位数的小数
        return +fixed; // 将字符串转换成数字
    };
    /**
     * 判断参与运算的两个操作数是否合法
     * @param x 操作数1
     * @param y 操作数2
     */
    Calculator.prototype.checkOperands = function (x, y) {
        if (x > this.maxOperand || x < this.minOperand) {
            console.log('操作数x超出了可计算数的范围');
            return false;
        }
        if (y > this.maxOperand || y < this.minOperand) {
            console.log('操作数y超出了可计算数的范围');
            return false;
        }
        return true;
    };
    return Calculator;
}());
var calculator4 = new Calculator(100, -100);
var sum = calculator4.add(12.1212, 45.4545); // 加法计算，得到57.58
var difference = calculator4.subtract(12.1212, 45.4545); // 减法计算，得到-33.33
//# sourceMappingURL=index.js.map