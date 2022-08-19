// 导入reflect-metadata模块
import 'reflect-metadata';

/**
 * 必需属性装饰器工厂
 * @param errorMessage 可选的错误消息：当当前属性未被提供值时，通过这个错误消息提示用户
 */
export function Required(errorMessage?: string): (target: any, propertyName: string) => void {
    // 返回一个必需属性装饰器
    return function (target: any, propertyName: string): void {
        // 如果用户未提供错误消息，那么构造默认的错误消息
        errorMessage = errorMessage ? errorMessage : `${target.constructor.name}.${propertyName} is required`;

        // 在目标属性上定义元数据custom:required，并将其值设置为错误消息
        Reflect.defineMetadata('custom:required', errorMessage, target, propertyName);

        // 在目标类的原型属性prototype上定义元数据customer:requiredProperties，
        // 通过它记录目标类中所有被必需属性装饰器装饰过的属性
        let properties: string[] = Reflect.getMetadata('custom:requiredProperties', target) as string[] || [];
        properties.push(propertyName);
        Reflect.defineMetadata('custom:requiredProperties', properties, target);
    }
}