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
