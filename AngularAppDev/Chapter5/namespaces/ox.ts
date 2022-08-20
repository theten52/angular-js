// 错误：bull.ts已经定义了全局作用域下的moo()函数
// function moo() {
//     console.log('I am an ox..');
// }

// 命名空间Ox
namespace Ox {
    export function moo() {
        console.log('I am an ox..');
    }
}