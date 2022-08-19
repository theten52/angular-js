// 使用var定义变量（被骗了。。）
for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 100 * i);
}

// 使用var定义变量（拒绝被骗）
for (var i = 0; i < 10; i++) {
    (function() {
        var j = i;
        setTimeout(function(){
            console.log(j);
        }, 100 * i);
    })();
}

// 使用let定义变量
for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 100 * i);
}

// 使用let定义变量
function shoes() {
    var left = 'Nike';
    let right = 'Adidas';
    
    console.log(left + right);
}

