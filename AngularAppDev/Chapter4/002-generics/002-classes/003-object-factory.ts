/**
 * 对象工厂类：将JSON字符串转换成指定类型的对象
 */
export class ObjectFactory<T> {
    /**
     * 构造对象工厂
     * @param _constructor 目标对象所属的类（构造函数）
     */
    constructor(private _constructor: new () => T) {
    }

    // 创建目标对象
    createObject(json: string): T {
        let jsonObject = JSON.parse(json); // 将JSON字符串解析成JSON对象
        let targetObject = new this._constructor(); // 构造目标对象

        // 将JSON对象中的属性拷贝到目标对象中
        for (let property in jsonObject) {
            targetObject[property] = jsonObject[property];
        }

        return targetObject; // 返回目标对象
    }
}
