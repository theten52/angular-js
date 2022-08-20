import { Biology } from '../../001-types-interfaces/004-type-checking/001-introduction';

// 使用类型约束
function add<T extends number | string>(x: T, y: T): T {
    return (x as any) + (y as any);
}

let sum = add(1, 2); // 得到数字3
let concatenation = add('1', '2'); // 得到字符串12

// let result = add<boolean>(true, true); // 错误，boolean不兼容于number | string
// let result1 = add(false, false); // 错误，推断类型Boolean不兼容于number | string

class ObjectFactory<T extends Biology> {
    constructor(constructor: new () => T) {
    }
    // ...省略的代码
}