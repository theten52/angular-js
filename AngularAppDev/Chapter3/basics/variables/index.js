"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
var student = 'L';
var student = 'Lcng'; // 关键字var重复定义的变量会覆盖已有的变量
var teacher = '刘东晓';
// let teacher = '刘小东'; // 错误：关键字let不能定义重复的变量
// 定义常量自然对数的底
// const E; // 错误，常量必须在声明的同时被赋值
// 定义常量π
var PI = 3.14;
// PI = 3.142; // 错误，常量不可重新赋值
// 定义常量对象圆
var CIRCLE = {
    radius: 12
};
CIRCLE.radius = 23; // 合法，常量的属性可以被重新赋值
//# sourceMappingURL=index.js.map