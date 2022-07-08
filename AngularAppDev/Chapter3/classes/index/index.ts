export { } // 使当前文件成为一个模块

// 使用下标访问背包对象的颜色属性
var knapsack = { color: 'orange', material: 'canvas', capacity: 10 };
var knapsackColor = knapsack['color']; // 得到“orange”

// 背包类
class Knapsack {
    [index: string]: string;
    material: string; // 包含索引的类可以封装属性
    // capacity: number; // 错误：属性的类型必须和索引值的类型一致
}
let knapsack1: Knapsack = new Knapsack();
knapsack1['color'] = 'orange'; // 向knapsack的索引中添加键为color值为orange的索引
let owner = knapsack1['owner']; // 获得到undefined，因为我们没有向knapsack1添加键为owner的索引项

// 索引键类型为number的背包类
class Packsack {
    [index: number]: string;
}

// 封装两个索引的帆布包类
class Rucksack {
    [index: string]: string;
    [index: number]: any;
}