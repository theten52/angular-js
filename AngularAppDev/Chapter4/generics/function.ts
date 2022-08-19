// 加法运算和字符串拼接函数
export function add<T>(x: T, y: T): T {
    let result: T = (x as any) + (y as any);
    return result;
}

let sum = add<number>(1, 2); // 得到数字3
let concatenation = add<string>('1', '2'); // 得到字符串12

// let result = add<number>(1, true); // 错误，布尔值true的类型不是number
let result1 = add<boolean>(true, true); // 得到数字2