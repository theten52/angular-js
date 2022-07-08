"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y; // 加法运算或字符串拼接的实现
}
var sum = add(1, 3); // 得到3
var fullName = add('L', 'cng'); // 得到Lcng
function subtract(x, y, z) {
    return (z === null || z === undefined) ? (x - y) : (x - y - z);
}
var difference = subtract(1, 2); // 获得-1
difference = subtract(1, 2, 3); // 获得-4
// difference = subtract (1, 2, 3, 4); // 错误，subtract()函数没有接受4个参数的重载
//# sourceMappingURL=index.js.map