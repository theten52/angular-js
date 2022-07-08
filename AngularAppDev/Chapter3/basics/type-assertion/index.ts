export {} // 使当前文件成为一个模块

let response: any = 'Web API返回的一串字符串'; // 通过ajax从服务端获取的一串字符串
let responseLength: number = (response as string).length; // 访问string类型变量的length属性


// let strResponseLength: string = responseLength as string; // 错误：类型number不能被断言为string

let weightResponse: any = '50kg';
let weight: number = weightResponse as number;
// weight = weight * 2; // 运行时错误：weight的运行时类型是string，无法参与乘法运算


let height: number = 100; 
let strHeight: string = height.toString(); // 调用number类型变量的toString()函数


let strLeft: string = '20';
let left: number = +strLeft; // 可能引发运行时异常