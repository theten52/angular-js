"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// 添加联系方式
function addContact(phone) {
    var addresses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        addresses[_i - 1] = arguments[_i];
    }
    console.log("\u8BB0\u5F55\u8054\u7CFB\u65B9\u5F0F-\u7535\u8BDD\u53F7\u7801\uFF1A".concat(phone) + (addresses && addresses.length ? "\uFF0C\u5730\u5740\uFF1A".concat(addresses.join(',')) : ''));
}
addContact('13111111111'); // 输出“记录联系方式-电话号码：13111111111”
// 输出“记录联系方式-电话号码：13111111111，地址：Baker Street 221B”
addContact('13111111111', 'Baker Street 221B');
// 输出“记录联系方式-电话号码：13111111111，地址：Baker Street 221B, Calle Bleeckrr 177A”
addContact('13111111111', 'Baker Street 221B', 'Calle Bleeckrr 177A');
// 错误：类型“string[]”的值不能赋给类型“string”的参数
// addContact('13111111111', ['Baker Street 221B', 'Calle Bleeckrr 177A'])
// 输出“记录联系方式-电话号码：13111111111，地址：Baker Street 221B, Calle Bleeckrr 177A”
addContact.apply(void 0, __spreadArray(['13111111111'], ['Baker Street 221B', 'Calle Bleeckrr 177A'], false));
//# sourceMappingURL=rest-parameter.js.map