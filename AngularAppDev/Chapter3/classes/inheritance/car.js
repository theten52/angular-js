"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 汽车类
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.run = function () {
        console.log(this.color + "\u8F66\u5728\u8DD1\u3002\u3002");
    };
    Car.prototype.beep = function () {
        return '嘟嘟';
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map