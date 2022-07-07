通过对本章内容的学习，我们对Node.js和npm有了一个大概的了解，并准备了一个基于Node.js的跨平台开发环境，最终还基于这一环境创建了一个简单的Web应用程序。在这个过程中，我们接触了一些命令。为了便于记忆，现将它们的概况描述如下。+
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

```
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

### CommonJs

一个规范，没有具体的实现。TypeScript默认会将模板转译为CommonJs规范定义的形式。
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

### RequireJS
RequireJS是遵循AMD规范的模块加载器，可用于在浏览器和Node.js中异步加载AMD模块—— Node.js内置的模块加载器只能加载CommonJS模块和UMD模块。

### SystemJS
不同于Node.js内置的模块加载器和RequireJS对能够加载的目标模块有所限制，SystemJS在其设计之初的目标就是加载符合任何规范的模块以及任何资源文件，比如CommonJS模块、AMD模块、UMD模块甚至ECMAScript模块，以及图片、文本、CSS、音频和HTML等文件。

SystemJS也有自己的模块规范，这一规范与CommonJS和AMD等规范互不兼容，因此其他模块加载器无法加载SystemJS模块。另外，SystemJS需要在相应的插件的帮助下才能加载ECMAScript模块及图片和文本等资源。这些插件的用法并不复杂，但由于本书不涉及ECMAScript模块及图片和文本等资源的加载，因此不会介绍这些插件的用法。

## Node和浏览器关于模块加载器的不同
Node.js就内置了这样一个模块加载器。在node中，我们不需要指定模块加载器也可以正常加载模块。

```
CommonJS模块之所以可以被Node.js加载，是因为Node.js中内置了一个遵循CommonJS规范的模块加载器。另外，由于UMD兼容CommonJS，Node.js也能加载UMD模块。
```

但是在浏览器中，由于没有定义好的模块加载器。所以我们需要加载模块时需要进行一些特殊配置。

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