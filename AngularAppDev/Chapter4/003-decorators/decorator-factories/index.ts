// 导入本小节的泛型对象工厂类ObjectFactory和人类People
import { ObjectFactory } from './object-factory';
import { People } from './people';

// 创建泛型对象工厂，并使用它将指定JSON字符串反序列化为人类对象
let objectFactory = new ObjectFactory(People);
// let json: string = '{"age": 1}';
// let person: People = objectFactory.createObject(json);
// console.log(`年龄：${person.age}`);

// 将包含address属性的JSON字符串反序列化成人类对象
let json1: string = '{"name": "Lcng", "age": 1, "address":{"street":""}}';
let person1: People = objectFactory.createObject(json1);
