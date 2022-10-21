# 参考
[路由](https://www.expressjs.com.cn/guide/routing.html)

# 简介
路由简单的HTTP方法：
```
app.get()
app.post()
...
```
所有支持的方法：[aap.METHOD](https://www.expressjs.com.cn/en/4x/api.html#app.METHOD)。

路由所有的方法：
```
app.all()
```

路由中间件：
```
app.use()
```
[中间件参考](https://www.expressjs.com.cn/en/guide/using-middleware.html)。

## 多个回调函数
路由支持多个回调函数，只需要在本回调函数的结尾使用`next()`方法即可激活下一个回调函数。