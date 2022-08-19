// 从上一节的class-type.ts中导入计算器类
import { Calculator } from '../common-types/class-type';

// 计时器类的类型接口
interface CalculatorClassType {
    new(precision: number): Calculator;
    maxOperand: number;
    minOperand: number;
    checkOperands: (x: number, y: number) => boolean
}

let calculatorClass: CalculatorClassType = Calculator;
let calculator: Calculator = new calculatorClass(2);
// 错误：calculatorClass是计算器类Calculator的对象一侧，而非类型一侧
// let calculator1: calculatorClass = new calculatorClass(2);

// 获取计算器类Calculator的类型部分
type calculatorType = Calculator;
let calculator2: calculatorType = new calculatorClass(2);