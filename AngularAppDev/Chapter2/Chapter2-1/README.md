# 安装 typescript
```
cnpm i -g typescript
```

# 转译 ts 到 js
```
tsc hello-world.ts
```
同目录下会生成一个名为“hello-world.js”的JavaScript文件。

tsc命令就是调用TypeScript编译器的命令，其作用是将指定的TypeScript文件编译成同一路径下的同名JavaScript文件。

# 自动编译TypeScript代码

## 添加tsconfig.json文件
```
{
}
```
tsconfig.json是TypeScript项目的配置文件，稍后我们将通过这个文件来配置当前项目的编译选项，但现在只需要知道VS Code发现当前项目中有这个文件时，会为当前项目创建两个任务，即“监视”和“构建”。

通过组合键“Ctrl + Shift + B”打开任务列表，选择“监视”和“构建”即可执行任务。

# 调试 ts 代码
## 通过Node.js快速地执行JavaScript代码
```
node hello-world.js
```
## 调试 js 代码
+ 打开要调试的文件，如hello-world.js。（打开很重要，vscode默认调试打开的文件）
  + 按下键盘上的F5键”选项，然后从弹出的菜单中选择“启动调试(S)”命令。
  + 或者：
  + 单击VS Code工具栏中的“调试(D)，然后选择“运行与调试”即可。
## 调试 ts 代码
+ 配置编译选项，如下：
```json
{    
    "compilerOptions": {  // 编译器选项       
        "sourceMap": true  // 生成映射文件    
    }
}
```
以上配置使用的ts代码被编译后生成相应的map文件，map文件是我们调试ts的基础。

+ 打开要调试的文件，如hello-world.ts。（打开很重要，vscode默认调试打开的文件）
  + 按下键盘上的F5键”选项，然后从弹出的菜单中选择“启动调试(S)”命令。
  + 或者：
  + 单击VS Code工具栏中的“调试(D)，然后选择“运行与调试”即可。

## 如何使得 ts 文件成为模块？
+ 使用`export`关键字。
+ 使用`import`关键字。

## node 运行 ts 文件
```terminal
node hello-world.js // 运行 ts 文件时，实际是运行其对应的js文件。
node hello-world // 以省略后缀的方式运行 ts 文件。
```

# Express:基于Node.js的Web应用程序开发框架
## 编写Angular应用程序的TypeScript文件怎样才能“运行”在浏览器中？
### 安装 Express
```
cnpm i -g express
```
### 查看 Express 版本
```
express --version
# or:
npm ls express
```
### 创建一个用于 Express 的 js 文件
```javascript
// server-app.js

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

```
### 创建index.html文件
```html
<html>

<head>
  <title>hello, world</title>
  <script src="/node_modules/systemjs/dist/system.js"></script>
  <script>
    (function () {
      System.config({ // 对SystemJS进行配置
        packages: { // 路径配置
          '/': { // 根路径
            defaultExtension: 'js' // 设置根路径下的资源的默认后缀为.js
          }
        }
      })
    })();

    // 使用模块加载器SystemJS加载index.js
    System.import('index.js');

  </script>
</head>

<body>
  hello, world 1111
</body>

</html>
```
### 启动 Express 应用程序
```terminal
node server-app.js
```

### 访问 http://localhost:3000/

### 将 ts 编译而来的JavaScript代码加载到浏览器中
```html
<html>
  <head>    
    <title>hello, world</title>    
    <!—加载hello-world.js-->    
    <script src="index.js"></script>
  </head>
  <body>    
    hello, world
  </body>
</html>
```
我们期望在浏览器中看到“hello, world”。

因为我们将index.js文件加载到了浏览器中。但是，现在我们还不能正常执行index.js文件。

### 当前会出现的问题

我们将index.js文件加载到了浏览器中。此时，index.js正在试图以某种方式将自己定义为一个模块，
并同时将hello-world.js加载到浏览器中。但不幸的是，浏览器并不认同这种方式—— Node.js却认同这种方式。