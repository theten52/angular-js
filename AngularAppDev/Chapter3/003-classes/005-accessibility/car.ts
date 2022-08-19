// 汽车类
export class Car {
    // 通过构造函数参数列表定义参数属性
    constructor(public color: string ) {
    }

    run(): void {
        console.log(`${this.color}车在跑。。`);
    }
}

let car: Car = new Car('蓝色');
car.run(); // 输出“蓝色车在跑。。”

// 计时器类
export class Calculator {
    // 受保护的、拥有默认值的只读参数属性
    public constructor(protected readonly precision: number = 2) {
    }
}