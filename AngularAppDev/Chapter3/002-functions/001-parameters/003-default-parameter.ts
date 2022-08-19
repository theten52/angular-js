export {} // 使当前文件成为一个模块

// 获取倍增的高度
function getBiggerHeight(height: number, unit: string = 'px') {
    return height * 2 + unit;
}

getBiggerHeight(20); // 获得40px
getBiggerHeight(30, 'em'); // 获得60em


