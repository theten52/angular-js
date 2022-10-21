# 参考

https://www.expressjs.com.cn/starter/installing.html

# 01 初始化项目

1. `npm init`
2. `npm install express --save`
3. 创建index.js(或者app.js)并编写最简单的express代码

# 02 启动服务
+ 直接运行 `node index` 或者 `node index.js` (或者 `node app.js` 或者 `node app`)


+ 使用node
    ```terminal
    node index

    <!-- or -->
    node index.js
    ```

+ 使用npm:
  + 修改`package.json`的`scripts`部分：
    ```terminal
    "scripts": {
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
  + 执行`npm run start`，会运行`package.json`中的`scripts`中的对应配置。