export { } // 使当前文件成为一个模块

// 计时器类
class Calculator {
    constructor() {
        console.log('构造了一个计算器对象');
    }
}

// 构造计时器对象
let calculator: Calculator = new Calculator(); // 输出“构造了一个计算器对象”