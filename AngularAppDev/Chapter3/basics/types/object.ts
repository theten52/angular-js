export { } // 使当前文件成为一个模块

let songs: Array<string> = ['皮影戏', '半岛铁盒'];
let evaluation: [number, string] = [100, '好听，百分好评'];
let obj: object = songs;
obj = evaluation;

// obj = true; // 错误：true的类型boolean不是对象类型
// obj = 1; // 错误：1的类型number不是对象类型
// obj = null; // 错误：null的类型null不是对象类型

function foo(obj: object) {
    // 基于对象obj的操作
}
// foo(1); // 错误：数字1不是对象
