export { } // 使当前文件成为一个模块

/**************************参数数量兼容*****************************/
/**
 * 模拟jQuery中的ajax()函数
 * @param url 要访问的URL
 * @param callback 服务端返回响应后要执行的回调函数
 */
function ajax(url: string, callback: (response: string, statusCode: number, statusText: string) => void) {
    // 省略了异步请求

    // 服务端返回响应后，执行调用方提供的回调函数
    callback('服务端响应字符串', 0, '调用成功');
}

// 异步访问http://localhost:3000/ajax
ajax('http://localhost:3000/ajax', function (res: string, code: number, text: string): void {
    if (code !== 0) {
        console.log('调用失败');
        return;
    }

    console.log(res);
});


// 计算函数变量
let calculate: (x: number, y: number, operator: string) => number;
calculate = function (a: number, b: number): number {
    return a + b;
}
// 错误，类型不兼容
// calculate = function(a: string, b: string): number {
//         return (a + b).length;
// }

/**************************参数类型兼容*****************************/
calculate = function (x: any, y: any): number {
    return x * y;
}

// 错误：类型number和null不兼容
// calculate = function (x: null, y: null): number {
//     return 0;
// }
/**************************返回类型兼容*****************************/
calculate = function (x: number, y: number): any {
    return x - y;
}

// 错误：类型undefined不兼容于number
// calculate = function(x: number, y: number) : undefined {
//     return undefined;
// }


/********兼容任何函数类型的函数类型(...args: any[]) => void*******/
type baseType = (...args: any[]) => void;
let func1: baseType = function () {
    console.log('func1');
}
let func2: baseType = function (n: number, s: string): string {
    return n + s;
}
let func3: baseType = function (b: boolean): boolean {
    return !b;
}
let func4: baseType = function (): never {
    throw 'error..';
}