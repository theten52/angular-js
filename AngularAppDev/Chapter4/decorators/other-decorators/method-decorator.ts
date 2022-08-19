// 导入reflect-metadata模块
import 'reflect-metadata';

/**
 * 方法装饰器
 * @param target 静态方法所属的类数或实例方法所属的类的原型属性prototype
 * @param methodName 方法名
 * @param descriptor 方法的属性描述符
 */
export function MethodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor): void {
    let type = Reflect.getMetadata('design:type', target, methodName);
    let paramtypes = Reflect.getMetadata('design:paramtypes', target, methodName);
    let returntype = Reflect.getMetadata('design:returntype', target, methodName);

    console.log(`方法的类型: ${type.name}; 参数类型: ${paramtypes.map(x => x.name)}; 返回类型: ${returntype ? returntype.name : 'void'}`);
}