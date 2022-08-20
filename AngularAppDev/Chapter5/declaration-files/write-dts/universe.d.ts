// 导出月亮类
export class Moon{
    revolve(): void;
}

// 导出太阳对象类型
export interface Sun {
    shine(): void;
}

// 导出太阳构造函数
export let Sun: {
    new(): Sun;
}

// 导出宇宙对象
export let universe: {
    moon: Moon,
    sun: Sun
}

export namespace v {
    let moon: Moon;
    let sun: Sun;
}