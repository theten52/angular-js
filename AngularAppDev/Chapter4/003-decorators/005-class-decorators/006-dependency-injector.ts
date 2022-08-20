// 导入reflect-metadata模块
import 'reflect-metadata';

/**
 * （静态）依赖注入器类
 */
export abstract class DependencyInjector {
    // 目标类和映射类的映射集合
    private static map = new Array<{ target: new (...args: any[]) => void, source: new (...args: any[]) => void }>();

    // 注册目标类和映射类的映射
    static register<TTarget, TSource extends TTarget>(target: new (...args: any[]) => TTarget, source: new (...args: any[]) => TSource): void {
        // 省略了对参数合法性的判断
        this.map.push({ target: target, source: source });
    }

    /**
     * 获取指定目标类的实例
     * @param constructor 目标类
     */
    static getService<TTarget>(constructor: new (...args: any[]) => TTarget): TTarget {
        // 基于映射获取目标类的映射类
        let source: (new (...args: any[]) => void) | undefined = undefined;
        for (let item of this.map) {
            if (item.target === constructor) {
                source = item.source;
                break;
            }
        }

        if (source === undefined) {
            throw `未找到类“${(constructor as any).name}”的映射源`;
        }

        // 创建映射类的实例
        let instance: any = this.createInstance(source);
        return instance;
    }

    // 创建映射类的实例
    private static createInstance(constructor: new (...args: any[]) => any): any {
        // 从映射类的元数据中，获取映射类的参数的构造类（函数）组成的数组
        let paramtypes: any = Reflect.getMetadata('design:paramtypes', constructor);

        // 如果映射类没有参数，那么直接返回通过映射类创建的实例
        if (!paramtypes || !paramtypes.length) {
            return new constructor();
        }

        // 构造映射类的参数列表
        let parameters: any[] = [];
        for (let parameterType of paramtypes) {
            // 获取参数实例
            let parameter: any = this.getService(parameterType);

            // 保存参数实例到参数列表
            parameters.push(parameter);
        }

        // 创建映射类的实例
        return new constructor(...parameters);
    }
}