import { Cat } from './cat';

// 扩展模块modules/module-augmentation/cat.ts
declare module './cat' {
    // 定义类型Cat，这一类型会被合并到cat.ts中的Cat类型中
    interface Cat {
        // 类型Cat的run()方法
        run(): void;
    }
}

// 给Cat类的原型添加run()方法，从而使Cat类的run()方法得到实现
Cat.prototype.run = function () {
    console.log('I can run..');
}