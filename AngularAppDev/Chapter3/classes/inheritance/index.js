"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sports_car_1 = require("./sports-car"); // 导入跑车类
var super_sports_car_1 = require("./super-sports-car"); // 导入超级跑车类
var electro_car_1 = require("./electro-car"); // 导入电动汽车类
var sportsCar = new sports_car_1.SportsCar();
sportsCar.color = '白色'; // 访问继承自父类Car的属性
sportsCar.run(); // 调用继承自父类Car的方法
var superSportsCar = new super_sports_car_1.SuperSportsCar();
superSportsCar.color = '红色'; // 继承自Car的属性color
superSportsCar.nos = 11; // SuperSportsCar本身的属性nos
superSportsCar.run(); // 继承自Car的方法run()
superSportsCar.accelerate(); // SuperSportsCar本身的方法accelerate()
var electroCar = new electro_car_1.ElectroCar();
electroCar.color = 'blue';
electroCar.run(); // 调用ElectroCar重写的run()方法
//# sourceMappingURL=index.js.map