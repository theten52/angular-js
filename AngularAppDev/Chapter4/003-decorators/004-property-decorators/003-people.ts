// 导入属性装饰器和地址类
import { PropertyDecorator } from './001-property-decorator';
import { Address } from './002-address';

/**
 * 人类
 */
export class People {
    // 装饰name属性
    @PropertyDecorator
    name: string; // 姓名

    // 装饰age属性
    @PropertyDecorator
    age: number; // 年龄

    // 装饰address属性
    @PropertyDecorator
    address: Address; // 地址

    // 打招呼
    greet() {
        console.log(`Hi, I'm ${this.name}. My age is ${this.age}. And I lives in: ${this.address.detail}`)
    }
}