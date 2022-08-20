// 全局命名空间Cow
namespace Cow {
    export function moo() {
        console.log('I\'m a cow..');
    }

    // 声明Node.js中的global对象
    declare let global: any;

    // 给global对象添加名为Cow的属性，并将命名空间Cow赋给这个属性
    if (global) {
        global.Cow = Cow;
    }
}