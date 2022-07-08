"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// JavaScript中的数组
var array = new Array();
array.push(1);
array.push(2);
array.push('3');
// TypeScript中的数字数组
var prices = new Array();
prices.push(1);
prices.push(2);
// prices.push('3'); // 错误，数字数组只能被添加数字元素
var cars = new Array('BYD', 'BMW', '乐视汽车~');
var colors = ['red', 'green', 'blue'];
// let genders: Array<string> = ['男', '女', 0, 1]; // 错误，数字0和1的类型不是string
var cars1;
cars1 = new Array('BYD', 'BMW', '乐视汽车~');
// cars = new string[]('BYD', 'BMW', '乐视汽车~'); // 错误，string[]只是类型，不是构造函数
// 遍历数组
for (var i_1 = 0; i_1 < colors.length; i_1++) {
    console.log(colors[i_1]); // 依次输出字符串red、green和blue
}
for (var index in colors) {
    console.log(index); // 依次输出数字0, 1, 2
    console.log(colors[index]); // 依次输出字符串red、green和blue
}
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color); // 依次输出字符串red、green和blue
}
//# sourceMappingURL=array.js.map