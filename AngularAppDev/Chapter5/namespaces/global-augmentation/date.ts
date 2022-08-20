// 导入模块number.ts
import './number';

// 为全局作用域下的构造函数Date添加函数toChineseDate()
declare global {
    interface Date {
        toChineseDate(): string;
    }
}

// 给构造函数的原型添加转换带中文的日期的函数toChinese()
Date.prototype.toChineseDate = function (): string {
    let date = this as Date;

    // 此处调用了模块number.ts为Number扩展的函数padZero()
    return `${date.getFullYear()}年${date.getMonth().padZero(2)}月${date.getDate().padZero(2)}日`;
}