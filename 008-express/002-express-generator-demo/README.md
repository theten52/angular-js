# 参考
1. [生成器](https://www.expressjs.com.cn/en/starter/generator.html)。
2. [路由基础](https://www.expressjs.com.cn/starter/basic-routing.html)。
3. [路由](https://www.expressjs.com.cn/guide/routing.html)。
4. 有用的命令：
  ```terminal

    change directory:
      $ cd 002-express-generator-demo

    install dependencies:
      $ npm install

    run the app:
      $ DEBUG=002-express-generator-demo:* npm start
  ```

# 01 安装生成器
通过应用生成器工具 express-generator 可以快速创建一个应用的骨架。

你可以通过 npx （包含在 Node.js 8.2.0 及更高版本中）命令来运行 Express 应用程序生成器。

```
$ npx express-generator
```

对于较老的 Node 版本，请通过 npm 将 Express 应用程序生成器安装到全局环境中并使用：

```
$ npm install -g express-generator
$ express
```
# 02 创建应用

```
express --view=pug 002-express-generator-demo
```

# 03 运行应用

安装依赖：
```
$ cd 002-express-generator-demo
$ npm install
```
运行程序：

```
# 在 MacOS 或 Linux 中，通过如下命令启动此应用：
$ DEBUG=myapp:* npm start

# 在 Windows 命令行中，使用如下命令：
> set DEBUG=myapp:* & npm start

# 在 Windows 的 PowerShell 中，使用如下命令：
PS> $env:DEBUG='myapp:*'; npm start
```
或者直接使用npm运行程序：
```
npm run start
```

然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。

# 04 程序执行流程
参考[app.js](app.js)。

1. 在`app.js`中定义好路由和视图的地址。当前请求路径和定义好的路由匹配时，路由会根据定义的规则将对应的视图返回给浏览器。
    1. 路由的`res.render('index', { title: 'Express' });`方法会将对应视图目录下的`index`模板渲染为html并返回给浏览器。
2. `app.js`会中还会定义一些中间件方便`express`运行中使用。