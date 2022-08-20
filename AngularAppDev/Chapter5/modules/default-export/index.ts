// 导入模块calculator.ts默认导出的加法函数add
import add from './calculator';
// 导入模块calculator.ts默认导出的加法函数add，并为其取别名concatenate
import concatenate from './calculator';
// 导入模块calculator.ts非默认导出的减法函数subtract
import { subtract } from './calculator';

// 加法计算
var sum = add(1, 2); // 得到3
console.log(sum); // 输出3

// 字符串拼接
var concatenation = concatenate('1', '2'); // 得到字符串12
console.log(concatenation); // 输出字符串12
