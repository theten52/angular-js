// 从模块hello-world.es2015.js中导入函数helloWorld
import { helloWorld } from './hello-world.es2015.js';

// 调用导入自模块hello-world.es2015.js的函数helloWorld
helloWorld();

// 错误，无法使用其它模块未通过export导出的变量
console.log(i);
