# 关于package.json中的main属性

main属性的值为./main.js（不是.ts）的属性。

其作用是使Node.js在执行node-index.ts的编译结果文件node-index.js中的语句“require(../my-package)”时，找到modules/my-package/main.ts的编译结果文件modules/my-package/main.js—— Node.js也有自己的模块解析过程。