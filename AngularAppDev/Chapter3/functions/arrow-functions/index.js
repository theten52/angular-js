"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/****************错误地使用this对象*******************
// 人的构造函数
function Person() {
    this.age = 1;
}
// 设置构造函数Person上的实例方法grow()
Person.prototype.grow = function () {
    setInterval(function () {
        console.log(this.age++);
    }, 2000);
}
// 创建人对象，并调用其方法grow()
new Person().grow();
****************************************************/
/****************使用闭包环境中的this对象*******************
// 人的构造函数
function Person() {
    this.age = 1;
}
// 设置构造函数Person上的实例方法grow()
Person.prototype.grow = function () {
    // 获得方法grow()内的this对象，即正在调用grow()方法的人类对象
    let that = this;

    setInterval(function () {
        // 通过闭包中的变量that获得人类对象
        console.log(that.age++);
    }, 2000);
}
// 创建人对象，并调用其方法grow()
new Person().grow();
****************************************************/
// 人的构造函数
function Person() {
    this.age = 1;
}
// 设置构造函数Person上的实例方法grow()
Person.prototype.grow = function () {
    var _this = this;
    setInterval(function () {
        // 箭头函数没有内置的this对象，因此当前this对象为grow()中的this对象
        console.log(_this.age++);
    }, 2000);
};
// 创建人对象，并调用其方法grow()
new Person().grow();
// 除法箭头函数
var divide = function (x, y) {
    return x / y;
};
// 平方箭头函数
var square = function (x) { return Math.pow(x, 2); };
// 累加数组
var sum = [1, 2, 3].reduce(function (p, c) { return p + c; }); // 得到6
//# sourceMappingURL=index.js.map