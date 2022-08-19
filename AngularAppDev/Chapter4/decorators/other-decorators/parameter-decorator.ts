/**
 * 参数装饰器
 * @param target 参数所在的静态方法所属的类或参数所在的实例方法所属的类的原型属性prototype
 * @param methodName 参数所在方法的名字
 * @param parameterIndex 参数在参数列表中的位置
 */
export function ParameterDecorator(target: any, methodName: string, parameterIndex: number): void {
    console.log(`第${parameterIndex}个参数被装饰了`);
}