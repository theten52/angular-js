"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var job = null;
var hobby = undefined;
// job = 'dev'; // 错误，不能将字符串赋给null类型的变量
// hobby = true; // 错误，不能将布尔值赋给undefined类型的变量
/***********以下代码应在编译器选项strictNullChecks为false的情况下体验***********
let address: string = null;
address = undefined;
let height: number = undefined;
height = null;
let skills: string[] = null;
skills = undefined;

let price: number = 12.3; // 商品单价
let count: number = null; // 商品数量不小心被赋予了null
let sum: number = price * count; // 合计0
count = undefined; // 不小心被赋予undefined
sum = price * count; // NaN
*****************************************************************************/ 
//# sourceMappingURL=null-undefined.js.map