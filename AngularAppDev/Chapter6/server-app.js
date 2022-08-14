// 导入Express模块，并创建Express应用程序对象
var express = require('express');
var app = express();

// 中间件配置：允许客户端请求服务端目录/node_modules和/src下的静态资源
app.use('/node_modules', express.static('node_modules'));
app.use('/src', express.static('src'));

// 路由配置：当客户端请求服务端根路径（即http://localhost:50424/）时，返回目录src下的HTML文件index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

// 启动应用程序，并监听50424端口上的请求
var server = app.listen(50424, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('当前应用程序正在监听http://%s:%s', host, port);
});