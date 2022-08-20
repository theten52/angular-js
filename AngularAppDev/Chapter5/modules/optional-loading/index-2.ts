// 声明一个符合CommonJS规范的模块加载函数require()
declare function require(moduleName: string): any;

// 导入模块rectangle.ts中矩形类Rectangle
import Rectangle from './rectangle';

// 计算矩形面积的函数
function getArea(rectangle: Rectangle) {
    return rectangle.length * rectangle.width;
}

// 在获取到的随机数不小于0.5的情况下导入rectangle.js
// 并通过其默认导出的矩形类实例化一个矩形对象
var random = Math.random();
if (random >= 0.5) {
    // 导入模块rectangle.js
    let rectangleModule = require('./rectangle');
    // 获取模块rectangle.js默认导出的矩形类
    let RectangleClass: typeof Rectangle = rectangleModule['default'];

    // 实例化一个矩形对象
    var rectangle = new RectangleClass();
    rectangle.length = 100;
    rectangle.width = 200;

    // 计算矩形对象的面积
    var area = getArea(rectangle);
    console.log(area);
}
