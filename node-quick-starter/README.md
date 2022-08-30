如何快速执行js文件：

```terminal
cd node-quick-starter
node xxx.js
// or
node xxx
```

如何引入新的模块：

+ 第一步：
```terminal
npm i --save-dev xxx
```
+ 第二步：
```js
var https = require('follow-redirects').https;
var fs = require('fs');
```
