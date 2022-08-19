export { } // 使当前文件成为一个模块

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
    setInterval(() => {
        // 箭头函数没有内置的this对象，因此当前this对象为grow()中的this对象
        console.log(this.age++);
    }, 2000);
}
// 创建人对象，并调用其方法grow()
new Person().grow();


// // 除法箭头函数
// let divide = (x: number, y: number): number => {
//     return x / y;
// }
// // 平方箭头函数
// let square = (x: number): number => Math.pow(x, 2);


// // 累加数组
// let sum = [1, 2, 3].reduce((p, c) => p + c); // 得到6
