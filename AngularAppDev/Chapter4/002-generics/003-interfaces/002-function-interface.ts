export { } // 使当前文件成为一个模块

// 泛型函数add()的类型接口
interface TypeOfAdd<T> {
    (x: T, y: T): T;
}

let add: TypeOfAdd<number> = (x: number, y: number) => x + y; // 数字加法运算函数
let add1: TypeOfAdd<string> = (x: string, y: string) => x + y; // 字符串拼接函数

let add2: <T>(x: T, y: T) => T;
add2 = <T>(x: T, y: T) => (x as any) + (y as any); // 数字加法运算或字符串拼接函数
add2<number>(1, 2); // 得到数字3
add2<string>('1', '2'); // 得到字符串12