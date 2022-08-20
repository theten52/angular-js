// 导入上一节的泛型对象工厂类ObjectFactory
import { ObjectFactory } from '../../002-generics/002-classes/003-object-factory';

/**
 * 地址类
 */
export class Address {
    street: string; // 街道
    houseNumber: number; // 门牌号

    // 详细地址
    get detail(): string {
        return `Street: ${this.street}; House Number: ${this.houseNumber}.`;
    }
}

/**
 * 人类 
 */
export class People {
    name: string; // 姓名
    age: number; // 年龄
    address: Address; // 地址

    // 打招呼
    greet() {
        // 通过地址属性的detail访问器获取详细地址信息
        console.log(`Hi, I'm ${this.name}. My age is ${this.age}. And I lives in: ${this.address.detail}`);
    }
}

// 创建人类对象工厂，并试图将JSON转换成人类对象
let peopleFactory = new ObjectFactory(People);
let person = peopleFactory.createObject('{"name": "Lcng", "age": 1, "address": {"street": "Baldwin Street", "houseNumber": 3}}');
person.greet();