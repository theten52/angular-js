import { Plane, Ship } from './001-union-type';

// 交叉类型示例：

let seaplane: Plane & Ship;
function createSeaplane(plane: Plane, ship: Ship): Plane & Ship {
    let seaplane: any = {};

    for (let key in plane) {
        seaplane[key] = plane[key];
    }

    for (let key in ship) {
        seaplane[key] = ship[key];
    }

    return seaplane;
}
seaplane = createSeaplane(new Plane(), new Ship);
seaplane.fly();
seaplane.sail();


// ***********************************字符串字面量类型*************************************
let shape: 'circle' | 'square' = 'circle';
// shape = 'rectangle'; // 错误：字符串“rectangle”不是合法的值
shape = 'square';


// ***********************************数字串字面量类型*************************************
let dayInWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
dayInWeek = 1;
dayInWeek = 3;
dayInWeek = 6;
// dayInWeek = 8; // 错误：值必须是从1到7的整数
