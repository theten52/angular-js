export {} // 使当前文件成为一个模块

// 加法函数
function add(x: number, y: number): number {
    return x + y;
}


// function concatenate(x: string, y: string): number { // 错误，x + y的类型是string，与number不兼容
//     return x + y;
// }


// 字符串拼接函数
function concatenate(x: string, y: string): string { // 返回类型应为string
    return x + y;
}


// 数字大小比较函数
function littleThen(x: number, y: number) {
    if (x < y) {
        return true;
    }

    return false;
}

let isLittleThen: boolean = littleThen(1, 2); // 将boolean类型的返回值赋给boolean类型的变量
let isLessThen = littleThen(3, 4); // isLessThen的类型会被推断为boolean


