// 使当前文件成为一个模块，因为global扩展必需发生在模块中
export { }

// global扩展
declare global {
    interface Number {
        padZero(length: number): string;
    }
}

// 将数字转换成指定长度的字符串
// 如果数字位数小于目标长度，那么在数字的左侧补0
// 如果数字位数大于目标长度，那么数字左侧多余的位数会被丢弃
Number.prototype.padZero = function(length: number): string {
    let value = this as Number;
    return (Array(length).join("0") + value).slice(-length);
}