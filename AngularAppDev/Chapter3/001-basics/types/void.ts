export { } // 使当前文件成为一个模块

let girlFriend: void = undefined;

function findGirlFriend(): void {
    console.log('Just do IT');
}

function findBoyFriend(): void {
    // return 'Lcng'; // 错误，不能返回值
}

function buyCar(money): void {
    if (money <= 0) {
        return;
    }

    console.log('乐视汽车，20米内超远距离遥控，2节5号电池可绕球场跑一圈。。');
}