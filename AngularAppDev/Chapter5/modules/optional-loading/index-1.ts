// 导入模块rectangle.ts中矩形类Rectangle
import Rectangle from './rectangle';

// 计算矩形面积的函数
function getArea(rectangle: Rectangle) {
    return rectangle.length * rectangle.width;
}

// 仅当随机数变量random的值大于0.5时才实例化矩形对象
var random = Math.random();
if (random > 0.5) {
    // 实例化一个矩形对象
    var rectangle = new Rectangle();
    rectangle.length = 100;
    rectangle.width = 200;

    // 计算矩形对象的面积
    var area = getArea(rectangle);
    console.log(area);
}
