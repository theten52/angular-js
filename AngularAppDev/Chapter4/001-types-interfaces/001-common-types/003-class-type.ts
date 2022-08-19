// 计时器类
export class Calculator {
    precision: number = 2;
    static maxOperand: number = 100;
    static minOperand: number = -100;

    constructor(precision: number) {
        this.precision = precision;
    }

    static checkOperands(x: number, y: number): boolean {
        return true;
    }
}

// 类的类型
let calculatorClass: { maxOperand: number, minOperand: number } = Calculator;

console.log(calculatorClass.maxOperand); // 输出100
console.log(calculatorClass.minOperand); // 输出-100
// console.log(calculatorClass.precision); // 错误，precision不是Calculator的对象一侧的成员

// 错误，类Calculator（作为对象）缺少属性precision
// let calculatorClass1: { maxOperand: number, minOperand: number, precision: number } = Calculator;

// 类的类型中包含静态方法的类型
let calculatorClass2: {
    maxOperand: number,
    minOperand: number,
    checkOperands: (x: number, y: number) => boolean
} = Calculator;

// 类的类型中包含构造函数的类型
// let calculatorClass3: {
//     new(): Calculator, 
//     maxOperand: number,
//     minOperand: number,
//     checkOperands: (x: number, y: number) => boolean
// } = Calculator;

// 类的类型中包含构造函数的类型
let calculatorClass4: {
    maxOperand: number,
    minOperand: number,
    new(precision: number): Calculator,
    checkOperands: (x: number, y: number) => boolean
} = Calculator;

// 简化类的类型
let calculatorClass5: {
    new(precision: number): Calculator
} = Calculator;

// 进一步简化类的类型
let calculatorClass6: new (precision: number) => Calculator = Calculator;

/**
 * 计算器工厂类，这是一个“静态”类
 */
abstract class CalculatorFactory {
    /**
     * 创建计算器
     * @param constructor 计算器类
     */
    static createCalculator(constructor: new (precision: number) => Calculator): Calculator {
        return new constructor(2);
    }
}

// 使用工厂创建计算器对象
let calculator: Calculator = CalculatorFactory.createCalculator(Calculator);