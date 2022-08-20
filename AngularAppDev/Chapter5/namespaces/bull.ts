// 错误：ox.ts已经定义了全局作用域下的moo()函数
// function moo() {
//     console.log('I am a bull..');
// }

// 命名空间Bull
namespace Bull {
    export function moo() {
        console.log('I am a bull..');
    }
}