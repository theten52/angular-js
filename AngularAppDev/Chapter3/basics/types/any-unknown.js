"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 30;
age = null;
age = undefined;
age = '30.1';
// let fixedAge = age.toFixed(0); // 运行时错误：变量age的运行时类型是string，不包含toFixed()方法
// 先基于运行时类型为string的变量age获取number类型的值，然后再调用这个值的toFixed()方法
var fixedAge1 = parseInt(age).toFixed(0);
var height;
var weight = '57Kg';
height = weight;
// let doubleHeight: number = height * 2; // 运行时错误：字符串不能参与乘法
var sex = '男';
sex = 1;
sex = undefined;
sex = null;
// let gender: boolean = sex; // 错误：不能将unknown类型的值赋给boolean类型的变量
//# sourceMappingURL=any-unknown.js.map