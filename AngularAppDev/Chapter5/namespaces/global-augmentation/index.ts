// 导入模块date.ts
import './date';
// 导入模块objects.ts
import './objects';
// 导入模块namespace.ts
// import './namespaces'; // 当需要在Node.js中执行index.js时，请注释这行代码

// 创建Date对象，并调用其toChineseDate()函数——这个函数由模块date.ts扩展而来
let date = new Date();
console.log(date.toChineseDate());

// 获得被扩展到Math对象中的PHI属性所代表的黄金比
let PHI = Math.PHI;
// 通过被扩展到console对象中的logWithDate()方法输出黄金比
console.logWithDate(`黄金比：${PHI}`);

// 调用被扩展到命名空间Bull中的run()方法
// Bull.run(); // 当需要在Node.js中执行index.js时，请注释这行代码