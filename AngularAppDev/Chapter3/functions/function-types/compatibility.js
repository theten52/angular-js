"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************参数数量兼容*****************************/
/**
 * 模拟jQuery中的ajax()函数
 * @param url 要访问的URL
 * @param callback 服务端返回响应后要执行的回调函数
 */
function ajax(url, callback) {
    // 省略了异步请求
    // 服务端返回响应后，执行调用方提供的回调函数
    callback('服务端响应字符串', 0, '调用成功');
}
// 异步访问http://localhost:3000/ajax
ajax('http://localhost:3000/ajax', function (res, code, text) {
    if (code !== 0) {
        console.log('调用失败');
        return;
    }
    console.log(res);
});
// 计算函数变量
var calculate;
calculate = function (a, b) {
    return a + b;
};
// 错误，类型不兼容
// calculate = function(a: string, b: string): number {
//         return (a + b).length;
// }
/**************************参数类型兼容*****************************/
calculate = function (x, y) {
    return x * y;
};
// 错误：类型number和null不兼容
// calculate = function (x: null, y: null): number {
//     return 0;
// }
/**************************返回类型兼容*****************************/
calculate = function (x, y) {
    return x - y;
};
var func1 = function () {
    console.log('func1');
};
var func2 = function (n, s) {
    return n + s;
};
var func3 = function (b) {
    return !b;
};
var func4 = function () {
    throw 'error..';
};
//# sourceMappingURL=compatibility.js.map