// 导入reflect-metadata
import 'reflect-metadata';
// 导入本节开头的人类People
import { People } from './003-people';
// 导入本小节的泛型对象工厂类ObjectFactory
import { ObjectFactory } from './004-object-factory';

// 创建人类对象工厂，并将JSON转换成包含address属性的人类对象
let peopleFactory = new ObjectFactory(People);
let person = peopleFactory.createObject('{"name": "Lcng", "age": 1, "address": {"street": "Baldwin Street", "houseNumber": 3}}');
person.greet();