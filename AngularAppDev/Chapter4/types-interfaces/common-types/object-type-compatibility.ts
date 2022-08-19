// 圆
export class Circle {
    area: number; // 面积
    radius: number; // 半径
}

// 正方形
export class Square {
    area: number; // 面积
    width: number; // 边长
}

// 基于成员名称的兼容
// let circle: Circle = new Square(); // 错误，类型不兼容
// let square: Square = new Circle(); // 错误，类型不兼容

// 形状类
export class Shape {
    area: number; // 面积
}

// 基于成员数量的兼容
let shape: Shape = new Circle();
let shape1: Shape = new Square();

// 所有类型的父类型
let n: {} = 1;
let s: {} = "2";
let f: {} = () => { console.log(123) };

// let circle: Shape = { area: 28.27, radius: 3 }; // 错误，对象字面量的类型必须和目标变量的类型完全一致
// let square: Shape = { area: 9, width: 3 }; // 错误，对象字面量的类型必须和目标变量的类型完全一致

let circle: Shape = { area: 28.27, radius: 3 } as { area: number, radius: number };
let square: Shape = { area: 9, width: 3 } as { area: number, width: number };

// 父类中包含可选成员
let size: { length: number, width: number, height?: number } = { length: 1, width: 2 }

// 饼干类
export class Cookie {
    name: string;
    shape: Shape;
}

// 圆形饼干类
export class CircleCookie {
    name: string;
    shape: Circle;
}

// 方形饼干类
export class SquareCookie {
    name: string;
    shape: Square;
}

let circleCookie: Cookie = new CircleCookie();
let squareCookie: Cookie = new SquareCookie();

let ss: { a?: number } = { a: undefined };