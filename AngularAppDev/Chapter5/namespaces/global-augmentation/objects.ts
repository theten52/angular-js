import './date';

// global扩展
declare global {
    // 为console对象的类型Console添加函数logWidthDate()
    interface Console {
        logWithDate(message?: string): void;
    }

    // 为Math对象的类型Math添加属性PHI（黄金比）
    interface Math {
        PHI: number;
    }
}

// 实现console对象的logWithDate()函数
console.logWithDate = function (message?: string): void {
    // 此处用了date.ts模块为Date类型扩展的toChineseDate()方法
    console.log(`${new Date().toChineseDate()}: ${message}`);
}

// 给Math对象的PHI属性赋值
Math.PHI = 0.618033988749895;