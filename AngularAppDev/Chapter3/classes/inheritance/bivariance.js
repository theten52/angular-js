"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sports_car_1 = require("./sports-car");
// 定义汽车质量检测函数变量，并将一个类型兼容的函数赋给它
var checkSportsCar;
checkSportsCar = function (car) {
    try {
        car.beep();
        car.run();
        return true; // 车辆合格，返回true
    }
    catch (_a) {
        return false; // 车辆不合格，返回false
    }
};
// 创建跑车对象，并以其为参数调用汽车质量检测函数
var sportsCar = new sports_car_1.SportsCar();
sportsCar.color = '灰色';
var isSportsCarQualified = checkSportsCar(sportsCar); // 获得true
// 将一个类型为(superSportsCar: SuperSportsCar) => boolean的箭头函数赋给函数变量checkSportsCar
checkSportsCar = function (superSportsCar) {
    try {
        superSportsCar.beep();
        superSportsCar.run();
        superSportsCar.accelerate();
        return true; // 车辆合格，返回true
    }
    catch (ex) {
        console.log(ex);
        return false; // 车辆不合格，返回false
    }
};
// 以sportsCar为参数调用类型为(superSportsCar: SuperSportsCar) => boolean的函数
isSportsCarQualified = checkSportsCar(sportsCar); // 获得false
//# sourceMappingURL=bivariance.js.map