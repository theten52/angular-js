import { SportsCar } from "./002-sports-car"; // 导入跑车类
import { SuperSportsCar } from "./003-super-sports-car"; // 导入超级跑车类
import { ElectroCar } from "./004-electro-car"; // 导入电动汽车类

let sportsCar: SportsCar = new SportsCar();
sportsCar.color = '白色'; // 访问继承自父类Car的属性
sportsCar.run(); // 调用继承自父类Car的方法

let superSportsCar: SuperSportsCar = new SuperSportsCar();
superSportsCar.color = '红色'; // 继承自Car的属性color
superSportsCar.nos = 11; // SuperSportsCar本身的属性nos
superSportsCar.run(); // 继承自Car的方法run()
superSportsCar.accelerate(); // SuperSportsCar本身的方法accelerate()

let electroCar: ElectroCar = new ElectroCar();
electroCar.color = 'blue';
electroCar.run(); // 调用ElectroCar重写的run()方法
