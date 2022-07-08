"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 获取倍增的高度
function getBiggerHeight(height, unit) {
    if (unit === void 0) { unit = 'px'; }
    return height * 2 + unit;
}
getBiggerHeight(20); // 获得40px
getBiggerHeight(30, 'em'); // 获得60em
//# sourceMappingURL=default-parameter.js.map