export { } // 使当前文件成为一个模块

// 加法函数
function add(x: number, y: number): number {
    return x + y;
}

let typeOfAdd = typeof (add); // 得到字符串function
// let myAdd = add; // 变量myAdd的类型是什么？
// let myAdd: function = add; // 错误，不存在类型function
let myAdd: (x: number, y: number) => number = add;