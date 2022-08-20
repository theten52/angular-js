// 导入必需属性装饰器（工厂）
import { Required } from './001-required';

// 地址类
export class Address {
    @Required()
    street: string; // 街道
}