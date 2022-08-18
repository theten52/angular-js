export { } // 使当前文件成为一个模块

// 计时器类
class Calculator {
    _precision: number = 2;
    maxOperand: number;
    minOperand: number;

    constructor(maxOperand: number, minOperand: number) {
        this.maxOperand = maxOperand;
        this.minOperand = minOperand;
    }

    /**
     * 加法
     * @param x 加数 
     * @param y 加数
     */
    add(x: number, y: number): number {
        let areOperandsLegal: boolean = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }

        let fixed: string = (x + y).toFixed(this._precision); // 保留指定位数的小数
        return +fixed; // 将字符串转换成数字
    }

    /**
     * 减法
     * @param x 被减数
     * @param y 减数
     */
    subtract(x: number, y: number): number {
        let areOperandsLegal: boolean = this.checkOperands(x, y);
        if (!areOperandsLegal) {
            throw '非法的操作数';
        }

        let fixed: string = (x - y).toFixed(this._precision); // 保留指定位数的小数
        return +fixed; // 将字符串转换成数字
    }

    /**
     * 判断参与运算的两个操作数是否合法
     * @param x 操作数1
     * @param y 操作数2
     */
    checkOperands(x: number, y: number): boolean {
        if (x > this.maxOperand || x < this.minOperand) {
            console.log('操作数x超出了可计算数的范围');
            return false;
        }

        if (y > this.maxOperand || y < this.minOperand) {
            console.log('操作数y超出了可计算数的范围');
            return false;
        }

        return true;
    }
}

let calculator4: Calculator = new Calculator(100, -100);
let sum: number = calculator4.add(12.1212, 45.4545); // 加法计算，得到57.58
let difference: number = calculator4.subtract(12.1212, 45.4545); // 减法计算，得到-33.33
