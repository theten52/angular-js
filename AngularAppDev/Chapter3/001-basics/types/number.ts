export {} // 使当前文件成为一个模块

let decimal: number = 6; // 整数
let fraction: number = 6.66; // 小数
let hex: number = 0xf00d; // 十六进制数以0x开头
let binary: number = 0b1010; // 二进制数以0b开头
let octal: number = 0o744; // 八进制数以0o开头

// decimal  = true; // 错误，true不能赋给number类型的变量
// let trueOrFalse: boolean = 1; // 错误，数字不能赋给boolean类型的变量

let count = 55; // count的类型被推断为number
// count = false; // 错误，false不能赋给类型为number的变量