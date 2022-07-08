// 计时器类
export class Calculator {
    protected readonly precision: number = 2;
    private static _maxOperand: number = 100;
    public static readonly minOperand: number = -100;

    // 读取私有属性_maxOperand的公共读取器
    static get maxOperand(): number {
        return this._maxOperand;
    }

    public constructor(precision: number) {
        this.precision = precision;
    }

    // 受保护的操作数检查方法
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
