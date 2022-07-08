export {} // 使当前文件成为一个模块

let heights: [number, string] = [20, '30px'];

function getPrice(): [boolean, number, string] {
    return [false, 0, '获取价格失败，服务器异常。'];
}

let priceResult = getPrice();
console.log(priceResult[0]); // 输出false
console.log(priceResult[1]); // 输出0
console.log(priceResult[2]); // 输出“获取价格失败，服务器异常”