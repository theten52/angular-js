export { } // 使当前文件成为一个模块

class Calculator {
    precision?: number; // 可选的精度属性

    static maxOperand?: number; // 可选的静态最大操作数属性
    static minOperand: number; // 非可选静态属性

    // 可选的加法计算方法
    add?(x: number, y: number): number;

    // 可选的减法计算方法
    subtract?(x: number, y: number): number {
        return x - y;
    }

    // 可选的最大操作数获取静态方法
    static getMaxOperand?(): number;

    // 可选的最小操作数获取静态方法
    static getMinOperand?(): number {
        return this.minOperand;
    }
}

// 使用可选属性
let calculator: Calculator = new Calculator();
calculator.precision = undefined;
Calculator.maxOperand = undefined;
let precision: number = calculator.precision!;
let maxOperand: number = Calculator.maxOperand!;
calculator.add!(1, 2);
calculator.subtract!(1, 2);
Calculator.getMaxOperand!();
Calculator.getMinOperand!();

calculator.add = (x: number, y: number) => x + y;
calculator.add(1, 2);
