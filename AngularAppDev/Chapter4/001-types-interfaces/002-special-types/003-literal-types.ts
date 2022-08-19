// ***********************************字符串字面量类型*************************************
let shape: 'circle' | 'square' = 'circle';
// shape = 'rectangle'; // 错误：字符串“rectangle”不是合法的值
shape = 'square';

// 圆
export class Circle {
    area: number; // 面积
    radius: number; // 半径
}

type keyOfCircle = keyof Circle; // 'area' | 'radius'

// ***********************************数字串字面量类型*************************************
let dayInWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
dayInWeek = 1;
dayInWeek = 3;
dayInWeek = 6;
// dayInWeek = 8; // 错误：值必须是从1到7的整数
