let color: string | null | undefined;
color = 'red';
color = null
color = undefined;

// 飞机类
export class Plane {
    fly() {
        console.log('I\'m flying..');
    }
}

// 轮船类
export class Ship {
    sail() {
        console.log('I\'m sailing..');
    }
}

let vehicle: Plane | Ship;
vehicle = new Plane();
vehicle.fly();
vehicle = new Ship();
vehicle.sail();

function travel(vehicle: Plane | Ship): void {
    // vehicle.fly(); // 错误：TypeScript编译器无法推断参数vehicle的具体类型
    // vehicle.sail(); // 错误：TypeScript编译器无法推断参数vehicle的具体类型

    if (vehicle instanceof Plane) {
        vehicle.fly();
    }
    else {
        vehicle.sail();
    }
}