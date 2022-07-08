export {} // 使当前文件成为一个模块

// 加法函数
function add(x: number, y: number) {
    return x + y;
}

add(1, 2); // 获得数字3
// add(1, '2'); // 错误，第二个实际参数的类型是string，不是number


// 字符串拼接函数
function concatenate(x: string, y: string) {
    return x + y;
}

// concatenate(1, 2); // 错误，1和2的类型是number，不是string
concatenate('5', '6'); // 获得字符串56


