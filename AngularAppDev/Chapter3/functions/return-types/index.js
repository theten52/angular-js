"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 加法函数
function add(x, y) {
    return x + y;
}
// function concatenate(x: string, y: string): number { // 错误，x + y的类型是string，与number不兼容
//     return x + y;
// }
// 字符串拼接函数
function concatenate(x, y) {
    return x + y;
}
// 数字大小比较函数
function littleThen(x, y) {
    if (x < y) {
        return true;
    }
    return false;
}
var isLittleThen = littleThen(1, 2); // 将boolean类型的返回值赋给boolean类型的变量
var isLessThen = littleThen(3, 4); // isLessThen的类型会被推断为boolean
//# sourceMappingURL=index.js.map