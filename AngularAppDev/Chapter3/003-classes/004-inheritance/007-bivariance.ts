// 必要的导入
import { Car } from "./001-car";
import { SportsCar } from "./002-sports-car";
import { SuperSportsCar } from "./003-super-sports-car";

// 双向协变

// 定义汽车质量检测函数变量，并将一个类型兼容的函数赋给它
let checkSportsCar: (sportsCar: SportsCar) => boolean;
checkSportsCar = (car: Car): boolean => {
    try {
        car.beep();
        car.run();
        return true; // 车辆合格，返回true
    }
    catch {
        return false; // 车辆不合格，返回false
    }
}

// 创建跑车对象，并以其为参数调用汽车质量检测函数
let sportsCar: SportsCar = new SportsCar();
sportsCar.color = '灰色';
let isSportsCarQualified = checkSportsCar(sportsCar); // 获得true

// 将一个类型为(superSportsCar: SuperSportsCar) => boolean的箭头函数赋给函数变量checkSportsCar
checkSportsCar = (superSportsCar: SuperSportsCar): boolean => {
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
}

// 以sportsCar为参数调用类型为(superSportsCar: SuperSportsCar) => boolean的函数
isSportsCarQualified = checkSportsCar(sportsCar); // 获得false