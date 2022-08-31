'use strict';

// 注意，在当前目录下直接使用`node node-fs.js`可以正常执行，如果使用vscode的调试则无法找到文件地址。

var fs = require('fs');

fs.readFile('node-fs.js', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

///web-development-with-node-and-express/ch03/public/img/logo.png

fs.readFile('../web-development-with-node-and-express/ch03/public/img/logo.png', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.length + ' bytes');
  }
});


fs.stat('../web-development-with-node-and-express/ch03/public/img/logo.png', function (err, stat) {
  if (err) {
    console.log(err);
  } else {
    console.log('↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓');
    // 是否是文件:
    console.log('isFile: ' + stat.isFile());
    // 是否是目录:
    console.log('isDirectory: ' + stat.isDirectory());
    if (stat.isFile()) {
      // 文件大小:
      console.log('size: ' + stat.size);
      // 创建时间, Date对象:
      console.log('birth time: ' + stat.birthtime);
      // 修改时间, Date对象:
      console.log('modified time: ' + stat.mtime);
    }
    console.log('↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑');
  }
});
