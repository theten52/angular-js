// 人类
export class People implements Biology { // People类必须实现接口Biology中的所有成员
    name: string;
    grow(): void {
        console.log('长个');
    }
}

// 动物类
export class Animal implements Biology { // Animal类必须实现接口Biology中的所有成员
    name: string;
    grow(): void {
        console.log('长膘');
    }
}

// 生物接口
export interface Biology extends Entity {
    // name: string;
    grow(): void;
}

let person: Biology = new Animal();
let animal: Biology = new People();

// 植物类
// class Plants implements Biology { // 错误：植物类为实现接口Biology中的name属性和grow()方法
//     height: number;
// }

export class Plants implements Biology {
    height: number;
    name: string;
    grow(): void {
        console.log(`我已经长到${this.height++}米了。`);
    }
}

// 接口的继承
export interface Entity {
    name: string;
}