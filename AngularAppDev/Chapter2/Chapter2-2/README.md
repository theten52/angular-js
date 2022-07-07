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