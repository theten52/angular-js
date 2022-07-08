"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response = 'Web API返回的一串字符串'; // 通过ajax从服务端获取的一串字符串
var responseLength = response.length; // 访问string类型变量的length属性
// let strResponseLength: string = responseLength as string; // 错误：类型number不能被断言为string
var weightResponse = '50kg';
var weight = weightResponse;
// weight = weight * 2; // 运行时错误：weight的运行时类型是string，无法参与乘法运算
var height = 100;
var strHeight = height.toString(); // 调用number类型变量的toString()函数
var strLeft = '20';
var left = +strLeft; // 可能引发运行时异常
//# sourceMappingURL=index.js.map