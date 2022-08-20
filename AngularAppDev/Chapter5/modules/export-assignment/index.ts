// 导入模块calculator.ts导出的唯一一个匿名函数，并为其取别名add
import add = require('./calculator');

var sum = add(1, 2); // 得到和3
var concatenation = add('1', '2'); // 得到字符串拼接结果12
var difference = add(1, -2); // 得到1-2的差，即-1
