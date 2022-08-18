//非ts模块示例：
namespace Land {
    //以上代码在全局作用域下定义了一个名为Land的命名空间，并通过标识符export导出了这个命名空间内一个名为temperature的变量。
    //但由于导出这个变量的export语句是被嵌套在命名空间内的，因此以上land.ts就不是一个TypeScript模块。
    export var temperatur = 25;
}