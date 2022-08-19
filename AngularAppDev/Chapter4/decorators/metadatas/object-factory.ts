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
        // 如果参数json的类型是string，那么把它解析成对象；否则，什么也不用做
        let jsonObject = typeof json === 'string' ? JSON.parse(json) : json;

        // 使用目标对象的构造类（函数）构造目标对象
        let _constructor = this._constructor as any;
        let targetObject = new this._constructor();

        // 目标类的元数据__metadata包含了目标类的所有属性的名字和构造函数
        // 迭代元数据，从而为目标对象的每一个属性赋值
        for (let propertyName in _constructor.__metadata) {
            // 获得当前被迭代的属性的构造类（函数）
            let propertyConstructor = _constructor.__metadata[propertyName].constructor;

            // 如果当前被迭代的属性的类型是简单类型boolean、number、string、null或undefined（没有考虑symbol）
            // 那么直接将JSON对象中相应属性的值赋给目标对象的当前属性
            if (propertyConstructor === Boolean || propertyConstructor === Number || propertyConstructor === String 
                || propertyConstructor === null || propertyConstructor === undefined) {
                targetObject[propertyName] = jsonObject[propertyName];
                continue;
            }

            // 如果当前被迭代的属性的构造类（函数）是我们自己定义的类（比如Address）
            // 那么，我们需要创建新的对象工厂实例，通过它以递归的方式创建当前属性引用的对象
            let propertyFactory = new ObjectFactory(propertyConstructor);
            let propertyInstance = propertyFactory.createObject(jsonObject[propertyName]);

            // 将递归创建的属性对象赋给目标对象的当前属性
            targetObject[propertyName] = propertyInstance;
        }

        // 返回目标对象
        return targetObject;
    }
}