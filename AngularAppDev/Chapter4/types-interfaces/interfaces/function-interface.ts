// 函数类型接口
export interface functionType {
    (x: number, y: number): number;
}

// class FunctionClass implements functionType { // 错误，函数类型接口无法被类实现
// }

let add: functionType = (x: number, y: number): number => {
    return x + y;
}
let sum: number = add(1, 2); // 得到3
