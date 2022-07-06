var express = require('express'); // 导入Express模块
var app = express(); // 创建基于Express的服务端应用程序

// 将项目根目录设置为静态文件目录
app.use(express.static(__dirname));

// 让应用程序监听3000端口上的HTTP请求
var server = app.listen(3000, function () { // 监听开始回调函数
    var host = server.address().address; // 请求的主机名
    var port = server.address().port; // 请求的端口

    // 向服务端控制台输出应用程序启动成功提示
    console.log('当前应用程序正在监听http://%s:%s', host, port);
});
