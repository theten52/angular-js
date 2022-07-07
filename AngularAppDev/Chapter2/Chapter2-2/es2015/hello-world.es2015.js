// 导出公共函数
export function helloWorld() {
    console.log('hello, world. I am an ES2015 module.');
}

// 模块内的奇数变量，未通过export导出，因此其它模块不能使用这个变量
var i = 1;
