通过对本章内容的学习，我们对Node.js和npm有了一个大概的了解，并准备了一个基于Node.js的跨平台开发环境，最终还基于这一环境创建了一个简单的Web应用程序。
在这个过程中，我们接触了一些命令。为了便于记忆，现将它们的概况描述如下。

+ （1）查看Node.js版本的命令：node -v。
+ （2）在Node.js中执行JavaScript模块（文件）的命令：node hello-world.js，其中hello-world.js是文件路径。
+ （3）查看npm版本的命令：npm -v。
+ （4）设置npm镜像的命令：npm config set registry https://registry.npm.taobao.org。
+ （5）查看npm镜像的命令：npm config get registry。
+ （6）查看npm镜像中是否有指定包的命令：npm view jquery，其中jquery是目标包的名字，且必须小写。
+ （7）安装TypeScript编译器到当前设备的npm全局安装路径的命令：npm install -g typescript。
+ （8）查看当前设备的npm全局安装路径下是否有TypeScript编译器的命令：npm ls -g typescript。
+ （9）安装Express到当前项目的命令：npm install express。
+ （10）查看当前项目下是否有Express的命令：npm ls express。

此外，我们还接触了一个配置，即TypeScript项目配置tsconfig.json：

```json
{
    "compilerOptions": { // 编译器选项
        "sourceMap": true, // 生成映射文件
    }
}
```

这个配置首先是VS Code自动编译项目中的TypeScript文件的基础，而其中的sourceMap属性则是允许VS Code调试TypeScript文件的前提条件。

此外，我们还了解到了模块存在的意义，同时也体会到了其发展的艰辛和混乱。

但从第3章开始，我们可以忽略这些混乱，因为其中介绍的TypeScript会处理好这一问题。

# 通用模块


## 通用模块规范
我们主要介绍3种通用模块规范：CommonJS，AMD和UMD。

尽管定义模块的规范有很多，但它们都有一个相同的优点，即兼顾多个平台（比如浏览器和Node.js）或同一平台的多个版本（比如IE的多个版本）。因此将这些规范称为通用模块规范，而将遵循这些规范的模块称为通用模块。
### CommonJs

一个规范，没有具体的实现。TypeScript默认会将模板转译为CommonJs规范定义的形式。

写法参考：
```js

exports.__esModule=true

exports.helloWorld=helloWorld

//require()函数的参数是需要被导入的CommonJS模块的路径，其扩展名.js可以被省略。
var hello_world_1 = require("./hello-world");
```

以上两个CommonJS模块中的对象exports和函数require()从何而来？答案是由通用模块加载器（Module Loader）提供。

CommonJS约定：只要是CommonJS模块，就都可以使用exports对象来导出变量和函数等定义，并使用require()函数来导入其他CommonJS模块。

CommonJS本身并不提供exports对象和require()函数，需要提供它们的是能够加载CommonJS模块的模块加载器。

CommonJS是Node默认的模块规范。

Node.js内置了这样一个模块加载器，因此它可以很好地处理CommonJS模块的加载和其中的导入及导出。

通用模块需要被加载器加载，模块加载器我们在之后介绍。

Node的模块加载器和浏览器的模块加载器是不同的，我们在之后介绍。

### AMD
支持异步加载的模块规范。

如何定义：
```
{
    "compilerOptions": { // 编译器选项
        "module": "amd" // 指定生成的JavaScript的模块规范为AMD
    }
}
```
### UMD
解决了【同一个项目中可能会同时包含一部分（老的）遵循CommonJS规范的模块，以及另一部分（新的）遵循AMD规范的模块。这种情形会使模块的加载变得难以控制，因为遵循不同规范的模块需要使用遵循不同规范的模块加载器才能加载】的问题。

遵循UMD规范的模块加载器可以同时用于加载CommonJS模块和AMD模块。

如何定义：
```
{
    "compilerOptions": { // 编译器选项
        "module": "umd" // 指定生成的JavaScript的模块规范为UMD
    }
}
```

## 模块加载器（Module Loader）
用来加载模块规范的加载器。实现模块规范定义的规则。

前面我们已经知道，CommonJS模块之所以可以被Node.js加载，是因为Node.js中内置了一个遵循CommonJS规范的模块加载器。
另外，由于UMD兼容CommonJS，Node.js也能加载UMD模块。

+ 浏览器的问题
  + 现在的问题是，我们开发的Web应用程序除了其中的服务端部分运行在Node.js中，还有很大一部分客户端需要运行在浏览器上，
而浏览器上是没有内置任何通用模块加载器的——这也是之前当我们试图在浏览器上运行index.js时，浏览器提示“exports is not defined”的原因。

### Node内置的模块加载器
+ 可加载：
  + CommonJS
  + UMD
### RequireJS[AMD]
RequireJS是遵循AMD规范的模块加载器，可用于在浏览器和Node.js中异步加载AMD模块—— Node.js内置的模块加载器只能加载CommonJS模块和UMD模块。
+ 可用于：
  + Node
  + 浏览器
+ 可加载：
  + AMD
### SystemJS
不同于Node.js内置的模块加载器和RequireJS对能够加载的目标模块有所限制，SystemJS在其设计之初的目标就是加载符合任何规范的模块以及任何资源文件，比如CommonJS模块、AMD模块、UMD模块甚至ECMAScript模块，以及图片、文本、CSS、音频和HTML等文件。

+ 可加载：
  + CommonJS模块
  + AMD模块
  + UMD模块
  + ECMAScript模块
  + 图片
  + 文本
  + CSS
  + 音频
  + HTML

SystemJS也有自己的模块规范，这一规范与CommonJS和AMD等规范互不兼容，因此其他模块加载器无法加载SystemJS模块。另外，SystemJS需要在相应的插件的帮助下才能加载ECMAScript模块及图片和文本等资源。这些插件的用法并不复杂，但由于本书不涉及ECMAScript模块及图片和文本等资源的加载，因此不会介绍这些插件的用法。

## Node和浏览器关于模块加载器的不同
Node.js就内置了这样一个模块加载器。在node中，我们不需要指定模块加载器也可以正常加载模块。

```
CommonJS模块之所以可以被Node.js加载，是因为Node.js中内置了一个遵循CommonJS规范的模块加载器。另外，由于UMD兼容CommonJS，Node.js也能加载UMD模块。
```

但是在浏览器中，由于没有定义好的模块加载器。所以我们需要加载模块时需要进行一些特殊配置。

**如何在浏览器中处理模块加载？**

1.引入systemjs到项目中。

+ 添加systemjs依赖到package.json
```json
{
    "dependencies": {
        "systemjs": "0.21.5"
    }
}
```
+ 执行 `cnpm i` 安装依赖。

2.在html中引入systemjs。

```html
<html>

<head>
  <title>hello, world</title>
  <!— 加载 模块加载器 SystemJS -->
    <script src="/node_modules/systemjs/dist/system.js"></script>
    <script>
      // 使用模块加载器SystemJS加载index.js        
      System.import('index.js');

    </script>
</head>

<body> hello, world</body>

</html>

```

以上代码包含三处修改，它们各自将产生如下影响。
+ （1）删除了原先通过`<script>`标签对index.js的加载，这将避免index.js被运行在JavaScript全局作用域中。
+ （2）新增了一对加载`/node_modules/systemjs/dist/system.js`的`<script>`标签，这将使SystemJS的源代码被加载到浏览器中，
  并在浏览器的全局作用域中创建一个名为System的模块加载器——其本质是一个JavaScript对象。
+ （3）新增了一对未设置src特性的`<script>`标签，并向其中写入了唯一的一行JavaScript代码`System.import('index.js')`，
  这将使index.js被SystemJS加载到浏览器中，并被运行在由SystemJS创建的一个独立作用域中。

SystemJS创建的独立作用域会被注入一些用于模块的导入和导出的工具，比如前面提到的exports对象和require()函数，
因此已经拥有独立作用域的index.js中的exports和require语句不会再引发语法错误。尤其是其中的require('./hello-world')
语句还将把hello-world.js加载到浏览器中，并使其运行在另一个独立的作用域中。

3.设置默认的js文件后缀名。

```html
<html>

<head>
  <title>hello, world</title>
  <!—加载模块加载器SystemJS-->
    <script src="/node_modules/systemjs/dist/system.js"></script>
    <script>
      (function () {
        // 对SystemJS进行配置
        System.config({
          // 路径配置
          packages: {
            // 根路径
            '/': {
              // 设置根路径下的资源的默认后缀为.js
              defaultExtension: 'js'
            }
          }
        })
      })();

      // 使用模块加载器SystemJS加载index.js        
      System.import('index.js');

    </script>
</head>

<body> hello, world</body>

</html>
```
核心的配置代码为：
```js
(function () {
  // 对SystemJS进行配置
  System.config({
    // 路径配置
    packages: {
      // 根路径
      '/': {
        // 设置根路径下的资源的默认后缀为.js
        defaultExtension: 'js'
      }
    }
  })
})();
```
加载流程为：
+ （1）`System.import('index.js')`被执行，从而创建一个独立的作用域，并成功地将index.js加载到其中。
+ （2）浏览器发现index.js底部的注释`//# sourceMappingURL=index.js.map`，从而开始加载并分析源映射文件index.js.map，
  并基于分析结果开始加载TypeScript文件index.ts。
+ （3）浏览器开始执行index.js的内容，在这个过程中发生了两件事：
  +  当index.js中的`require('./hello-world')`被执行·时，SystemJS会创建另一个独立作用域，
  然后成功地将hello-world.js加载到其中，并将hello-world.js中的函数helloWorld()导出到index.js所在的作用域中；
  +  当index.js中的调试标识符debugger被发现时，浏览器会根据源映射文件index.js.map的内容，将代码的执行停在index.ts
  相应的断点标识符debugger处，从而使我们可以在浏览器中调试index.ts—— 这就是图2-41所示的结果。
+ （4）接着，我们单击了浏览器调试工具的“继续执行”按钮（或按下F8键），index.js中的函数调用helloWorld()因此而被执行，
  这将导致自hello-world.js中导入的同名函数helloWorld()被执行，并向控制台输出问候“hello, world”。
+ （5）最后，我们切换到了控制台，并看到了其中的问候“hello, world”——这就是图2-42所示的结果。

以上便是使用SystemJS加载通用模块index.js和hello-world.js的过程，同时我们还顺便见证了TypeScript在浏览器中也能调试。
但到目前为止，我们都还没有感受到通用模块带来的实际好处，为此让我们对index.ts和hello-world.ts再进行一次最后的修改，使它们的内容分别与代码清单2-20和代码清单2-21一致。
# ECMAScript模块

ECMA国际组织在2015年将模块写入了ECMAScript 2015（简称ES 2015）中，从而使支持ES 2015的浏览器（或其他JavaScript运行环境）可以直接加载符合ES 2015规范的模块，即ECMAScript模块。


示例代码：
```
<html>

<head>
  <title>'hello, world' from ECMAScript module</title>
  <!--通过type特性的值为module的<script>标签加载ES模块>-->
  <script type="module" src="index.es2015.js"></script>
</head>

<body>
  'hello, world' from ECMAScript module
</body>

</html>
```

ECMAScript模块和核心就是 `<script type="module" src="index.es2015.js"></script>` 这行代码，其中 `type="module"` 就是ECMAScript模块的标识。

# TypeScript和模块的关系。

我们可以通过TypeScript来编写遵循ES 2015规范的模块，然后将它编译成兼容更多环境的通用模块。
```
TypeScript -> 编写遵循ES 2015规范的模块 -> 编译成兼容更多环境的通用模块
```