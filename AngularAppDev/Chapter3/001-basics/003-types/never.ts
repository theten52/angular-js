export { } // 使当前文件成为一个模块

let bePeace: never; // 合法的变量声明
// bePeace = true; // 错误，不能将布尔值赋给never类型的变量
// bePeace = 1000; // 错误，不能将数字赋给never类型的变量
// bePeace = '一万年以后'; // 错误，不能将字符串赋给never类型的变量

function error(): never {
    throw '错误，若未捕获，程序将终止';
}

function xiaoCaiQi(): never {
    while (true) {
        console.log('根本停不下来的小彩旗');
    }
}
