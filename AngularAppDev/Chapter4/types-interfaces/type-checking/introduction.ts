// 人类
export class Biology {
    name: string;
}

// 继承生物类的人类
export class People extends Biology {
    age: number;

    greet(): void {
        console.log(`Hi, I'm ${this.name}. And my age is ${this.age}.`);
    }
}

let json = '{"name": "Lcng", "age": "1"}';
export let person = JSON.parse(json) as People;
// person.greet(); // 运行时错误，变量未包含名为greet的成员