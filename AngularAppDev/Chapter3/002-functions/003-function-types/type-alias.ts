export { } // 使当前文件成为一个模块


// 类型别名
type containingType = (x: string, y: string) => boolean;
type comparingType = (x: string, y: string) => boolean;


// 判断指定字符串是否包含另一个子字符串的函数变量
let contains: containingType = function (x: string, y: string): boolean {
    return x.indexOf(y) > -1;
}
// 按字典顺序判断指定的一个字符串是否大于指定的另一个字符串
let greaterThan: comparingType = function (x: string, y: string): boolean {
    return x > y;
}

// 获取函数变量greaterThan的类型别名
type greaterThanType = typeof greaterThan; // 获取编译时类型
let typeOfGreaterThan: string = typeof greaterThan; // 获取运行时类型