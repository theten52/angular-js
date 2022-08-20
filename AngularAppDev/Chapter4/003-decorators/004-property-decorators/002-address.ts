// 导入属性装饰器PropertyDecorator
import { PropertyDecorator } from './001-property-decorator';

/**
 * 地址类
 */
export class Address {
    // 装饰street属性
    @PropertyDecorator
    street: string; // 街道

    // 装饰houseNumber属性
    @PropertyDecorator
    houseNumber: number; // 门牌号

    get detail(): string { // 详细地址
        return `Street: ${this.street}; House Number: ${this.houseNumber}.`;
    }
}