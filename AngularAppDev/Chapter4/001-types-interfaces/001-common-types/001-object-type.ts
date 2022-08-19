// 人类
export class People {
    name: string;
}

// 动物类
export class Animal {
    name: string;
}

let person: People = new Animal();
let animal: Animal = new People();

let person1: { name: string } = new Animal();
let animal1: { name: string } = new People();


let plants: { name: string, grow: () => void } = {
    name: '栀子树',
    grow: (): void => {
        console.log('生长，花开，结果，叶不落。');
    }
};

// 细菌类
export class Bacteria {
    name: string;
    private _age: number

    get age(): number {
        return this._age;
    }
    set age(value: number) {
        this._age = value;
    }

    grow(): void {
        this._age++;
    }
}

let bacteria: Bacteria = new Bacteria();
let bacteria1: { name: string, age: number, grow(): void } = bacteria;
// 错误：对象的类型是由对象的公共成员组成的，因此细菌类Bacteria的所代表的类型不包含属性_age
// let bacteria2: { name: string, _age: number, age: number, grow(): void } = bacteria;