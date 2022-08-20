import { add } from '../001-function/001-function';
import { People, Calculator } from '../002-classes/001-calculator';
import { ObjectFactory } from '../002-classes/003-object-factory';

let sum = add<number>(1, 2); // 得到数字3
let sum1 = add(1, 2); // 得到数字3
// let sum2 = add(1, true); // 错误，类型参数会被推断为number

let peopleFactory = new ObjectFactory<People>(People);
let peopleFactory1 = new ObjectFactory(People);



let calculator = new Calculator();
let result1 = calculator.add(1, true);