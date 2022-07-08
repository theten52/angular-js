"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 用户注册函数
function register(name, password, age) {
    console.log("\u8BB0\u5F55\u6CE8\u518C\u4FE1\u606F-\u7528\u6237\u540D\uFF1A" + name + "\uFF0C\u5BC6\u7801\uFF1A" + password + (age ? "\uFF0C\u5E74\u9F84\uFF1A" + age : ''));
}
register('Lcng', '1'); // 输出“记录注册信息-用户名：Lcng，密码：1”
register('Lcng', '1', 3); // 输出“记录注册信息-用户名：Lcng，密码：1，年龄：3”
//# sourceMappingURL=optional-parameter.js.map