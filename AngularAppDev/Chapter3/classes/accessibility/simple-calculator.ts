// 必要的导入
import { Calculator } from "./calculator";

// 简单计时器类
export class SimpleCalculator extends Calculator {
    add(x: number, y: number): number {
        let areOperandsLegal: boolean = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }

        let fixed: string = (x + y).toFixed(this.precision);
        return +fixed;
    }

    subtract(x: number, y: number): number {
        let areOperandsLegal: boolean = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }

        let fixed: string = (x - y).toFixed(this.precision);
        return +fixed;
    }
}