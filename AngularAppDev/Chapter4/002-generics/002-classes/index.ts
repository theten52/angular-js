// 导入上一节的“运行时类型判断”小节的人类People和生物类Biology
import { People, Biology } from '../../001-types-interfaces/004-type-checking/001-introduction'
// 导入对象工厂类
import { ObjectFactory } from './003-object-factory';

// 使用对象工厂创建人类People对象
let peopleFactory = new ObjectFactory<People>(People);
let people: People = peopleFactory.createObject('{"name": "Lcng", "age": "1"}');
people.greet(); // 输出Hi, I'm Lcng. And my age is 1.

// 使用对象工厂类创建生物类Biology的对象
let biologyFactory = new ObjectFactory<Biology>(Biology);
let biology: Biology = biologyFactory.createObject('{"name": "T-800"}');
console.log(`${biology.name} will be back`);