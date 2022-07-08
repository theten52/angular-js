// 抽象的计时器类
export abstract class Calculator {
    private static _maxOperand: number = 100;
    public static readonly minOperand: number = -100;

    static get maxOperand(): number {
        return this._maxOperand;
    }

    public constructor(protected readonly precision: number = 2) {
    }

    protected checkOperands(x: number, y: number): boolean {
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

// let calculator: Calculator = new Calculator(); // 错误：无法创建抽象类的实例
