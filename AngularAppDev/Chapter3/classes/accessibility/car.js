"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 汽车类
var Car = /** @class */ (function () {
    // 通过构造函数参数列表定义参数属性
    function Car(color) {
        this.color = color;
    }
    Car.prototype.run = function () {
        console.log(this.color + "\u8F66\u5728\u8DD1\u3002\u3002");
    };
    return Car;
}());
exports.Car = Car;
var car = new Car('蓝色');
car.run(); // 输出“蓝色车在跑。。”
// 计时器类
var Calculator = /** @class */ (function () {
    // 受保护的、拥有默认值的只读参数属性
    function Calculator(precision) {
        if (precision === void 0) { precision = 2; }
        this.precision = precision;
    }
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=car.js.map