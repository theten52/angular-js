"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 判断指定字符串是否包含另一个子字符串的函数变量
var contains = function (x, y) {
    return x.indexOf(y) > -1;
};
// 按字典顺序判断指定的一个字符串是否大于指定的另一个字符串
var greaterThan = function (x, y) {
    return x > y;
};
var typeOfGreaterThan = typeof greaterThan; // 获取运行时类型
//# sourceMappingURL=type-alias.js.map