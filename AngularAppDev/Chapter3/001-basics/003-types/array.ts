export {} // 使当前文件成为一个模块

// JavaScript中的数组
let array = new Array();
array.push(1);
array.push(2);
array.push('3');



// TypeScript中的数字数组
let prices: Array<number> = new Array<number>();
prices.push(1);
prices.push(2);
// prices.push('3'); // 错误，数字数组只能被添加数字元素

let cars: Array<string> = new Array<string>('BYD', 'BMW', '乐视汽车~');
let colors: Array<string> = ['red', 'green', 'blue'];

// let genders: Array<string> = ['男', '女', 0, 1]; // 错误，数字0和1的类型不是string

let cars1: string[];
cars1 = new Array<string>('BYD', 'BMW', '乐视汽车~');
// cars = new string[]('BYD', 'BMW', '乐视汽车~'); // 错误，string[]只是类型，不是构造函数

// 遍历数组
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); // 依次输出字符串red、green和blue
}

for (let index in colors) {
    console.log(index); // 依次输出数字0, 1, 2
    console.log(colors[index]); // 依次输出字符串red、green和blue
}

for (let color of colors) {
    console.log(color); // 依次输出字符串red、green和blue
}
