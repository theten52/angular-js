export { } // 使当前文件成为一个模块

for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}

var student = 'L';
var student = 'Lcng'; // 关键字var重复定义的变量会覆盖已有的变量

let teacher = '刘东晓';
// let teacher = '刘小东'; // 错误：关键字let不能定义重复的变量

// 定义常量自然对数的底
// const E; // 错误，常量必须在声明的同时被赋值

// 定义常量π
const PI = 3.14;
// PI = 3.142; // 错误，常量不可重新赋值

// 定义常量对象圆
const CIRCLE = {
    radius: 12
}
CIRCLE.radius = 23; // 合法，常量的属性可以被重新赋值