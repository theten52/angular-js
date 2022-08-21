// 月亮构造函数
var Moon = (function () {
    function Moon() {}
    Moon.prototype.revolve = function () {
        console.log('读者无法看到我的另一面。。');
    }
    return Moon;
}());

// 太阳构造函数
var Sun = (function () {
    function Sun() {}
    Sun.prototype.shine = function () {
        console.log('读者无法靠近我。。');
    }
    return Sun;
}());

// 宇宙对象
var universe = {
    moon: new Moon(),
    sun: new Sun()
}

// 导出太阳构造函数、月亮构造函数和宇宙对象
exports.Moon = Moon;
exports.Sun = Sun;
exports.universe = universe;