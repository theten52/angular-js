"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCalculator = void 0;
// 必要的导入
var calculator_1 = require("./calculator");
// 简单计时器类
var SimpleCalculator = /** @class */ (function (_super) {
    __extends(SimpleCalculator, _super);
    function SimpleCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleCalculator.prototype.add = function (x, y) {
        var areOperandsLegal = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }
        var fixed = (x + y).toFixed(this.precision);
        return +fixed;
    };
    SimpleCalculator.prototype.subtract = function (x, y) {
        var areOperandsLegal = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }
        var fixed = (x - y).toFixed(this.precision);
        return +fixed;
    };
    return SimpleCalculator;
}(calculator_1.Calculator));
exports.SimpleCalculator = SimpleCalculator;
//# sourceMappingURL=simple-calculator.js.map