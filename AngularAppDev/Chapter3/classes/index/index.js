"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 使用下标访问背包对象的颜色属性
var knapsack = { color: 'orange', material: 'canvas', capacity: 10 };
var knapsackColor = knapsack['color']; // 得到“orange”
// 背包类
var Knapsack = /** @class */ (function () {
    function Knapsack() {
    }
    return Knapsack;
}());
var knapsack1 = new Knapsack();
knapsack1['color'] = 'orange'; // 向knapsack的索引中添加键为color值为orange的索引
var owner = knapsack1['owner']; // 获得到undefined，因为我们没有向knapsack1添加键为owner的索引项
// 索引键类型为number的背包类
var Packsack = /** @class */ (function () {
    function Packsack() {
    }
    return Packsack;
}());
// 封装两个索引的帆布包类
var Rucksack = /** @class */ (function () {
    function Rucksack() {
    }
    return Rucksack;
}());
//# sourceMappingURL=index.js.map