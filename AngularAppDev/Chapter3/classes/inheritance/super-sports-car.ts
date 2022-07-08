// 导入跑车类
import { SportsCar } from "./sports-car";

// 超级跑车类
export class SuperSportsCar extends SportsCar {
    nos: number; // 氮氧化物加速系统
    accelerate(): void {
        console.log(`加速1分钟，N2O剩余${--this.nos}千克。。`);
    }

    // 非法的重写：类型() => void不兼容于类型() => string
    // beep(): void {
    //     console.log('滴滴');
    // }

    beep(): string {
        return '滴滴';
    }
}