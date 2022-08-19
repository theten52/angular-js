import { add } from './function';
import { People, ObjectFactory, Address, Calculator } from './classes/calculator';

let sum = add<number>(1, 2); // 得到数字3
let sum1 = add(1, 2); // 得到数字3
// let sum2 = add(1, true); // 错误，类型参数会被推断为number

let peopleFactory = new ObjectFactory<People>(People);
let peopleFactory1 = new ObjectFactory(People);

let address = new ObjectFactory(Address);

let calculator = new Calculator();
let result1 = calculator.add(1, true);