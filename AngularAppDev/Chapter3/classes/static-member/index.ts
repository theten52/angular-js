export { } // 使当前文件成为一个模块

// 计时器类
class Calculator {
    _precision: number = 2;
    static _maxOperand: number = 100;
    static _minOperand: number = -100;

    /**
     * 访问器，访问属性_precision
     */
    get precision(): number {
        console.log('获取属性_precision的值')
        return this._precision;
    }

    /**
     * 设置器，设置属性_precision
     */
    set precision(value: number) {
        console.log('设置属性_precision的值')
        this._precision = value;
    }

    /**
     * 静态读取器，访问静态属性_maxOperand
     */
    static get maxOperand(): number {
        console.log('读取静态属性_maxOperand的值')
        return Calculator._maxOperand;
    }

    /**
     * 静态设置器，设置静态属性_maxOperand
     */
    static set maxOperand(value: number) {
        console.log('设置静态属性_maxOperand的值')
        this._maxOperand = value; // this的是当前类，而非实例
    }

    /**
     * 静态读取器，访问静态属性_minOperand
     */
    static get minOperand(): number {
        console.log('读取静态属性_minOperand的值')
        return Calculator._minOperand;
    }

    /**
     * 静态设置器，设置静态属性_minOperand
     */
    static set minOperand(value: number) {
        console.log('设置静态属性_minOperand的值')
        this._minOperand = value; // this的是当前类，而非实例
    }

    /**
     * 构造计算器实例，不再接受操作数范围参数
     */
    constructor() {
    }

    /**
     * 重置操作数范围
     */
    static resetOperandRange(): void {
        Calculator._maxOperand = 100;
        this._minOperand = -100;
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
        if (x > Calculator.maxOperand || x < Calculator.minOperand) {
            console.log('操作数x超出了可计算数的范围');
            return false;
        }

        if (y > Calculator.maxOperand || y < Calculator.minOperand) {
            console.log('操作数y超出了可计算数的范围');
            return false;
        }

        return true;
    }
}

Calculator.maxOperand = 200;
Calculator.minOperand = -200;
let calculator: Calculator = new Calculator();
let sum = calculator.add(150, -150); // 得到0

Calculator.resetOperandRange(); // 将最大操作数和最小操作数分别重置回100和-100
sum = calculator.subtract(150, -150); // 异常：操作数超出范围