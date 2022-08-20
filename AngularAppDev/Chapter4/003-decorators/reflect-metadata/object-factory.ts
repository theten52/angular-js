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
        let _constructor = this._constructor as any;
        let targetObject = new this._constructor();

        // 获取目标类的名为__metadata的元数据
        let metadataProperties = Reflect.getMetadata('__metadata', this._constructor);

        // 为目标对象的属性赋值
        for (let propertyName in metadataProperties) {
            let propertyConstructor = metadataProperties[propertyName].constructor;

            if (propertyConstructor === Boolean || propertyConstructor === Number || propertyConstructor === String 
                || propertyConstructor === null || propertyConstructor === undefined) {
                targetObject[propertyName] = jsonObject[propertyName];
                continue;
            }

            let propertyFactory = new ObjectFactory(propertyConstructor);
            let propertyInstance = propertyFactory.createObject(jsonObject[propertyName]);

            targetObject[propertyName] = propertyInstance;
        }

        return targetObject;
    }
}