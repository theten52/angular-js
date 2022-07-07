// 从当前目录下导入模块hello-world(.ts)内的公共函数helloWorld
import { helloWorld } from './hello-world';

debugger; // 断点标识符
helloWorld(); // 调用hello-world()函数

var i = 1;
setInterval(function () {
    console.log('奇数i: ' + i);
    i += 2;
}, 3000);