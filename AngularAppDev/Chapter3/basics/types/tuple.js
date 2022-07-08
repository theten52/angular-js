"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heights = [20, '30px'];
function getPrice() {
    return [false, 0, '获取价格失败，服务器异常。'];
}
var priceResult = getPrice();
console.log(priceResult[0]); // 输出false
console.log(priceResult[1]); // 输出0
console.log(priceResult[2]); // 输出“获取价格失败，服务器异常”
//# sourceMappingURL=tuple.js.map