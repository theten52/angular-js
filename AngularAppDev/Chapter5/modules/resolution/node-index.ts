// import { width, radius } from '../my-package/main';

// 相对导入同级目录my-package下的package.json的types属性指向的模块main.ts
import { width, radius } from '../my-package'
console.log(width);
console.log(radius);

// 相对导入同级目录another-package下的模块index.ts
import {red, green, square, circle} from '../another-package';
console.log(red);
console.log(green);
console.log(square);
console.log(circle);

// 非相对导入node_modules/reflect-metadata/index.d.ts
import 'reflect-metadata'; 
Reflect.defineMetadata('Author', 'Lcng', Object);