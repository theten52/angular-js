"use strict";
// console.log('空气温度：' + temperature); // 访问air.ts中的变量temperature
Object.defineProperty(exports, "__esModule", { value: true });
var sea_1 = require("./sea"); // 导入模块sea.ts导出的变量temperature
console.log('海水温度：' + sea_1.temperature); // 输出“海水温度：15”
// 导入模块human.ts导出的变量temperature和函数swin()
var human_1 = require("./human");
console.log('人体温度：' + human_1.temperature); // 输出“人体温度：36.5”
(0, human_1.swim)(); // 输出“天生不会游泳”
// import * as human from './human';
// console.log('人体温度：' + human.temperature);
// human.swim();
//# sourceMappingURL=index.js.map