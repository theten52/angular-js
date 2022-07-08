"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 必要的导入
var calculator_1 = require("./calculator");
var simple_calculator_1 = require("./simple-calculator");
var calculator = new calculator_1.Calculator(2);
// calculator.checkOperands(1, 2);
var simpleCalculator = new simple_calculator_1.SimpleCalculator(2);
var sum = simpleCalculator.add(1, 2); // 得到3
var difference = simpleCalculator.subtract(1, 2); // 得到-1
// Calculator.maxOperand = 200;
// Calculator.minOperand = 200;
console.log("\u8BA1\u65F6\u5668\u6700\u5927\u64CD\u4F5C\u6570\uFF1A" + calculator_1.Calculator.maxOperand);
//# sourceMappingURL=index.js.map