// 必要的导入
import { Calculator } from "./calculator";
import { SimpleCalculator } from "./simple-calculator";

let calculator: Calculator = new Calculator(2);
// calculator.checkOperands(1, 2);

let simpleCalculator: SimpleCalculator = new SimpleCalculator(2);
let sum = simpleCalculator.add(1, 2); // 得到3
let difference = simpleCalculator.subtract(1, 2) // 得到-1

// Calculator.maxOperand = 200;
// Calculator.minOperand = 200;

console.log(`计时器最大操作数：${Calculator.maxOperand}`)