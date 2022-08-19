// 导入reflect-metadata
import 'reflect-metadata';

/**
 * 对象工厂类：将JSON字符串转换成指定类型的对象
 */
export class ObjectFactory<T> {
    /**
     * 构造一个创建指定类型对象的对象工厂
     * @param _constructor 目标对象的构造类（函数）
     */
    constructor(private _constructor: new () => T) {
    }

    // 创建目标对象
    createObject(json: string | object): T {
        // 解析JSON对象
        let jsonObject = typeof json === 'string' ? JSON.parse(json) : json;

        // 构造目标对象
        let targetObject = new this._constructor();

        // 迭代JSON对象中的各个属性名
        for (let propertyName in jsonObject) {
            // 获取属性装饰器为目标类的被迭代属性创建的名为“design:type”的元数据，
            // 即目标类中被迭代属性的构造类（函数）
            let designType = Reflect.getMetadata('design:type', this._constructor.prototype, propertyName);

            // 如果被迭代属性的类型是boolean、number、string、null或undefined（未考虑symbol）,
            // 或者其未被属性装饰器PropertyDecorator装饰，
            // 那么直接将JSON对象中相应属性的值赋给目标对象的当前属性
            if (designType === Boolean || designType === Number || designType === String 
                || designType === null || designType === undefined) {
                targetObject[propertyName] = jsonObject[propertyName];
                continue;
            }

            // 如果当前被迭代的属性的构造类（函数）是我们自己定义的类（比如Address）
            // 那么，我们需要创建新的对象工厂实例，通过它以递归的方式创建当前属性引用的对象
            let propertyFactory = new ObjectFactory(designType);
            let propertyInstance = propertyFactory.createObject(jsonObject[propertyName]);

            // 将递归创建的属性对象赋给目标对象的当前属性
            targetObject[propertyName] = propertyInstance;
        }

        // 返回目标对象
        return targetObject;
    }
}