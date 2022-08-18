// 汽车类
export class Car {
    color: string;
    run(): void {
        console.log(`${this.color}车在跑。。`);
    }

    beep(): string {
        return '嘟嘟';
    }
}