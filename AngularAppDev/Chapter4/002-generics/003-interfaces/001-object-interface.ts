export { } // 使当前文件成为一个模块

// 计算器对象接口
interface ICalculator<T> {
    add(x: T, y: T): T;
}

// 数字计算器类
class NumericCalculator implements ICalculator<number> {
    add(x: number, y: number): number {
        return x + y;
    }
}

// 字符串计算器类
class StringCalculator implements ICalculator<string> {
    add(x: string, y: string): string {
        return x + y;
    }
}

// 泛型计算器类
class Calculator<T> implements ICalculator<number> {
    add(x: number, y: number): number {
        return (x as any) + (y as any);
    }
}

// 另一个泛型计算器类
class Calculator1<T> implements ICalculator<T> {
    add(x: T, y: T): T {
        return (x as any) + (y as any);
    }
}
