// 导入必需属性装饰器（工厂）
import { Required } from './required';
import { Address } from './address';

// 人类
export class People {
    @Required('姓名不能为空')
    name: string; // 姓名
    age: number; // 年龄
    @Required()
    address: Address; // 地址
}