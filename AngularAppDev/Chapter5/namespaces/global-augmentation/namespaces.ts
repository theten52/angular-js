// 使当前文件成为一个模块
export {}

// 为全局作用域下的命名空间Bull（被定义在namespaces/bull.ts中）扩展run()函数
declare global {
    namespace Bull {
        function run(): void;
    }
}

// 实现扩展至命名空间Bull下的函数run()
Bull.run = function(): void {
    console.log('I\'m running..');
}