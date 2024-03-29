# ts 基本语法

---
## 如何使得项目为一个ts项目？
+ 在项目根目录下新建一个名为tsconfig.json的JSON文件。并按规则配置ts相关配置。这样，这个项目即可被定义为一个ts项目。
---
## 什么是TypeScript模块？

---
### 反例1：没有定义任何的import和export语句
```js
var temperature = 20;                      // 空气中的温度
console.log('当前空气温度：' + temperature); // 输出"当前空气温度：20"
```
简单来说，任何包含`顶层（Top-level）`的import或export语句的TypeScript文件都是模块.
——以上air.ts未包含任何import或export语句，因此它不是一个模块。

顶层的import或export语句又是什么呢？

---
### 反例2：import和export语句没有定义在顶层
```js
namespace Land {
    export var temperature = 25;
}
```
以上代码在全局作用域下定义了一个名为Land的命名空间，并通过标识符export导出了这个命名空间内一个名为temperature的变量。
但由于导出这个变量的export语句是被嵌套在命名空间内的，因此以上land.ts就不是一个TypeScript模块。

嵌套在命名空间的语句也不属于模块。

---
### 正例1：import和export语句定义在顶层

如何定一个未被嵌套的export语句？
```js
export var temperature = 15;
```
以上代码先通过我们熟悉的标识符var定义了另一个名为temperature的变量，然后通过标识符export对这个变量进行了导出。

由于以上export语句未被嵌套在任何其他环境中，因此以上代码所在的文件就是一个TypeScript模块。

---
### 正例2：导出变量和方法
```js
export var temperature = 36.5;
export function swim() {
    console.log('天生不会游泳');
}
```
以上代码在再次导出另一个名为temperature的变量的同时，还导出了一个名为swim()的函数，因此无疑也是一个TypeScript模块。

模块中导出的变量和函数可以被模块内的其他代码访问，但更多时候它们是提供给其他模块使用的。而为了能够使用它们，其他模块还需要对它们进行导入。

---
## 在vscode中隐藏ts编译生成的js文件
```json
{
    "workbench.colorTheme": "Visual Studio Light",
    "javascript.referencesCodeLens.enabled": true,
    "typescript.referencesCodeLens.enabled": true,
    "files.exclude": {
        "**/.DS_Store": true,
        "**/.git": true,
        "**/.hg": true,
        "**/.svn": true,
        "**/CVS": true,
        "**/*.js": {
            "when": "$(basename).ts"
        }, //隐藏编译结果文件                
        "**/*.js.map": {
            "when": "$(basename)"
        } //隐藏编译结果映射文件            
    },
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "git.autofetch": true,
    "window.zoomLevel": 0
}
```

以上带有注释的两行代码分别用于隐藏VS Code项目中由TypeScript文件编译而来的JavaScript文件和映射文件，
但不会隐藏由我们自己手动向项目中添加的JavaScript文件和必要的映射文件。

---
## ts 箭头函数
---
### this 指向问题

我们需要知道this作为函数内置的对象，其取值会因函数被调用的方式的不同而不同：
+ （1）当函数在全局作用域中被直接调用时，其中的this对象为JavaScript运行时中的全局对象，比如，浏览器中的window以及Node.js中的global——但在strict模式下为undefined；
+ （2）当函数被当作构造函数调用时，其中的this对象为当前正在被构造的对象；
+ （3）当函数被当作对象的方法调用时，其中的this对象为正在调用当前方法的对象；
+ （4）当函数通过call()函数或bind()函数被调用时，其中的this对象为call()或bind()这两个函数提供的对象。

---
### 箭头函数的特点
那么它指向的到底是什么呢？为了回答这个问题，我们需要知道this作为函数内置的对象，其取值会因函数被调用的方式的不同而不同：
+ （1）箭头函数不管以什么方式被调用，其中都没有内置的this对象；
+ （2）如果在箭头函数中访问this对象，那么这个this对象是箭头函数所处的闭包环境中最近的封闭函数内的this对象；
+ （3）如果箭头函数没有处在闭包环境中，那么箭头函数中访问的this对象就是JavaScript运行时中的全局对象，比如，浏览器中的window对象——这一规则与当前文件是否采用strict模式无关。

箭头函数不能被当作构造函数使用，其中除了没有内置的this对象，也没有内置的arguments对象、new.target对象和super()函数。