// 泛型计算器类
export class Calculator<T> {
    add(x: T, y: T): T {
        return (x as any) + (y as any);
    }
}

let calculator = new Calculator<number>();
let sum = calculator.add(1, 2); // 得到数字3
// let concatenation = calculator.add('1', '2'); // 错误，string与number不兼容

let calculator1 = new Calculator<string>();
// let sum1 = calculator1.add(1, 2); // 错误，number与string不兼容
let concatenation1 = calculator1.add('1', '2'); // 得到字符串“12”

// 导出人类
export class People {
    name: string;
    age: number;

    greet(): void {
        console.log(`Hi, I'm ${this.name}. And my age is ${this.age}.`);
    }
}

/**
 * 人类对象工厂类
 */
export class PeopleFactory {
    /**
     * 创建人类对象
     * @param json 人类对象的JSON字符串
     */
    createPerson(json: string) {
        let _person = JSON.parse(json) as People;
        let person = new People();
        person.name = _person.name;
        person.age = _person.age;
        return person;
    }
}

let json = '{"name": "Lcng", "age": "1"}';
let person: People = new PeopleFactory().createPerson(json);
person.greet(); // 输出Hi, I'm Lcng. And my age is 1

/**
 * 对象工厂类：将JSON字符串转换成指定类型的对象
 */
export class ObjectFactory<T> {
    /**
     * 构造对象工厂
     * @param constructor 目标对象所属的类（构造函数）
     */
    constructor(private constructor: new () => T) {
    }

    // 创建目标对象
    createObject(json: string): T {
        let jsonObject = JSON.parse(json); // 将JSON字符串解析成JSON对象
        let targetObject = new this.constructor(); // 构造目标对象

        // 将JSON对象中的属性拷贝到目标对象中
        for (let property in jsonObject) {
            targetObject[property] = jsonObject[property];
        }

        return targetObject; // 返回目标对象
    }
}

let peopleFactory = new ObjectFactory<People>(People);
let people: People = peopleFactory.createObject('{"name": "Lcng", "age": "1"}');
people.greet(); // 输出Hi, I'm Lcng. And my age is 1.

// 地址类
export class Address {
    street: string; // 街道
    houseNumber: number; // 门牌号

    // 详细地址
    get detail(): string {
        return `Street: ${this.street}; House Number: ${this.houseNumber}.`;
    }
}

let addressFactory = new ObjectFactory<Address>(Address);
let address = addressFactory.createObject('{"street": "Baldwin Street", "houseNumber": 3}');
console.log(address.detail);