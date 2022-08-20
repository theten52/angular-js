// 导入模块内的命名空间
import { DateUtility, StringUtility } from './utility';

// 计算时间差
let date1 = new Date(2018, 9, 4, 10, 57);
let date2 = new Date(2008, 9, 1, 16, 59);
let dateDifference = DateUtility.difference(date1, date2);
console.log(JSON.stringify(dateDifference)); // 输出{"days":3654,"hours":17,"minutes":58,"seconds":0}

// 计算字符串差集
let stringDifference = StringUtility.difference('Lcng', 'Lc');
console.log(stringDifference); // 输出ng