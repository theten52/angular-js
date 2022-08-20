// import { Cat } from './cat';
// import { Mouse } from './mouse';

import { Cat, Mouse } from './index'; // 导入index.ts重新导出的Cat和Mouse

let cat = new Cat();
let mouse = new Mouse();

console.log(`我有一只猫和一只老鼠，它们的名字分别是${cat.name}和${mouse.name}`);