// import { width, radius } from '../my-package/main';

//这条import语句将尝试按照以下顺序查找目标模块：
//（1）modules/my-package.ts；
//（2）modules/my-package.tsx；
//（3）modules/my-package.d.ts；
//（4）modules/my-package/package.json（导入这个文件的types或typings属性指向的模块）；
//（5）modules/my-package/index.ts；
//（6）modules/my-package/index.tsx；
//（7）modules/my-package/index.d.ts。

// 相对导入同级目录my-package下的package.json的types属性指向的模块main.ts
import { width, radius } from '../my-package'
console.log(width);
console.log(radius);

// 新增的import语句会使TypeScript编译器尝试按照以下顺序查找目标模块：
//（1）modules/another-package.ts；
//（2）modules/another-package.tsx；
//（3）modules/another-package.d.ts；
//（4）modules/another-package/package.json（导入这个文件的types或typings属性指向的模块）；
//（5）modules/another-package/index.ts；
//（6）modules/another-package/index.tsx；
//（7）modules/another-package/index.d.ts。
//显然，TypeScript编译器会在进行以上第五次查找尝试时找到目标模块，即modules/another-package/index.ts。
//由于index.ts重新导出了color.ts和shape.ts两个模块，
//因此TypeScript编译器最终会通过以上新增的import语句导入color.ts和shape.ts这两个模块。

// 相对导入同级目录another-package下的模块index.ts
import { red, green, square, circle } from '../another-package';
console.log(red);
console.log(green);
console.log(square);
console.log(circle);

//import语句将尝试按照以下顺序导入reflect-metadata中的模块：
//（1）modules/resolution/node_modules/reflect-metadata.ts；
//（2）modules/resolution/node_modules/reflect-metadata.tsx；
//（3）modules/resolution/node_modules/reflect-metadata.d.ts；
//（4）modules/resolution/node_modules/reflect-metadata/package.json（导入其types或typings指向的模块）；
//（5）modules/resolution/node_modules/reflect-metadata/index.ts；
//（6）modules/resolution/node_modules/reflect-metadata/index.tsx；
//（7）modules/resolution/node_modules/reflect-metadata/index.d.ts；
//（8）modules/node_modules/reflect-metadata.ts；
//（9）modules/node_modules/reflect-metadata.tsx；
//（10）modules/node_modules/reflect-metadata.d.ts；
//（11）modules/node_modules/reflect-metadata/package.json（导入其types或typings指向的模块）；
//（12）modules/node_modules/reflect-metadata/index.ts；
//（13）modules/node_modules/reflect-metadata/index.tsx；
//（14）modules/node_modules/reflect-metadata/index.d.ts；
//（15）node_modules/reflect-metadata.ts；
//（16）node_modules/reflect-metadata.tsx；
//（17）node_modules/reflect-metadata.d.ts；
//（18）node_modules/reflect-metadata/package.json（导入其types或typings指向的模块）；
//（19）node_modules/reflect-metadata/index.ts；
//（20）node_modules/reflect-metadata/index.tsx；
//（21）node_modules/reflect-metadata/index.d.ts。

// 非相对导入node_modules/reflect-metadata/index.d.ts
import 'reflect-metadata';
Reflect.defineMetadata('Author', 'Lcng', Object);