export { } // 使当前文件成为一个模块

// 泛型计算器类
class Calculator<T>  {
    add(x: T, y: T): T {
        return (x as any) + (y as any);
    }
}

// 泛型计算器类的类型接口
interface TypeOfCalculator {
    new <T>(): Calculator<T>
}

// 定义值为泛型计算器类的变量，并使用它来创建计算器对象
let genericCalculator: TypeOfCalculator = Calculator;
let calculator: Calculator<number> = new genericCalculator<number>();
calculator.add(1, 2); // 得到数字3