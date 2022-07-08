// 使用var定义变量（被骗了。。）
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
// 使用var定义变量（拒绝被骗）
for (var i = 0; i < 10; i++) {
    (function () {
        var j = i;
        setTimeout(function () {
            console.log(j);
        }, 100 * i);
    })();
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
// 使用let定义变量
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
// 使用let定义变量
function shoes() {
    var left = 'Nike';
    var right = 'Adidas';
    console.log(left + right);
}
//# sourceMappingURL=variable.js.map