// 导入方法装饰器和参数装饰器
import { MethodDecorator } from './001-method-decorator';
import { ParameterDecorator } from './003-parameter-decorator';
import { AccessorDecorator } from './004-accessor-parameter';

// 计算器类
export class Calculator {
    private _precision: number;

    @AccessorDecorator
    get precision(): number {
        return this._precision;
    }

    // @AccessorDecorator // 错误：读取器被装饰过，设置器不能再被装饰
    set precision(value: number) {
        this._precision = value;
    }

    @MethodDecorator // 使用方法装饰器装饰add()方法
    add(/*参数装饰器*/@ParameterDecorator x: number, y: number): number {
        return x + y;
    }
}