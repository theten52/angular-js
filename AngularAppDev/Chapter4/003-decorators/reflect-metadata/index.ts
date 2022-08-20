// 导入本节开头的人类People
import { People } from '../001-introduction/001-introduction';
// 导入本小节的泛型对象工厂类ObjectFactory
import { ObjectFactory } from './object-factory';
// 导入元数据定义函数
import { setPeopleMetadata, setAddressMetadata } from './utility';

// 定义元数据
setPeopleMetadata();
setAddressMetadata();

// 创建人类对象工厂，并将JSON转换成包含address属性的人类对象
let peopleFactory = new ObjectFactory(People);
let person = peopleFactory.createObject('{"name": "Lcng", "age": 1, "address": {"street": "Baldwin Street", "houseNumber": 3}}');
person.greet();