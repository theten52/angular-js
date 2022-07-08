// console.log('空气温度：' + temperature); // 访问air.ts中的变量temperature

import { temperature } from './sea'; // 导入模块sea.ts导出的变量temperature
console.log('海水温度：' + temperature); // 输出“海水温度：15”

// 导入模块human.ts导出的变量temperature和函数swin()
import { temperature as humanTemperature, swim } from './human';
console.log('人体温度：' + humanTemperature); // 输出“人体温度：36.5”
swim(); // 输出“天生不会游泳”

// import * as human from './human';
// console.log('人体温度：' + human.temperature);
// human.swim();