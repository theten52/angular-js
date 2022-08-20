// import { greeting } from 'classic'; // 非相对导入当前目录下的模块classic.ts
// console.log(greeting); // 输出“hi...”

// import { name } from 'classic1'; // 非相对导入上级目录下的模块classic1.ts
// console.log(name); // 输出“Lcng”

import { greeting as hi } from './classic'; // 相对导入当前目录下的模块classic.ts
console.log(hi); // 输出“hi...”

import { name as lcng } from '../classic1'; // 相对导入上级目录下的模块classic1.ts
console.log(lcng); // 输出“Lcng”