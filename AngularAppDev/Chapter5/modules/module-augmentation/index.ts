import { Cat } from './cat'; // 导入模块cat.ts
import './run'; // 副作用导入run.ts

let cat = new Cat();
cat.greet(); // 输出'Hi...'
cat.run(); // 编译成功