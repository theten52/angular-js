export { } // 使当前文件成为一个模块

function add(x: number, y: number): number; // 加法运算函数
function add(x: string, y: string): string; // 字符串拼接函数
function add(x: any, y: any): any {
    return x + y; // 加法运算或字符串拼接的实现
}

let sum: number = add(1, 3); // 得到3
let fullName: string = add('L', 'cng'); // 得到Lcng

// 错误，这看上去是在合法地调用类型为(x: any, y: any) => any的实现函数，但TypeScript编译器不允许实现函数被直接调用
// let address: string = add('Baker Street', 211);


function subtract(x: number, y: number): number; // 两个数的减法
function subtract(x: number, y: number, z: number): number; // 三个数的减法
function subtract(x: number, y: number, z?: number): number { // 参数z应是可选参数
    return (z === null || z === undefined) ? (x - y) : (x - y - z)
}

let difference = subtract(1, 2); // 获得-1
difference = subtract(1, 2, 3); // 获得-4
// difference = subtract (1, 2, 3, 4); // 错误，subtract()函数没有接受4个参数的重载
