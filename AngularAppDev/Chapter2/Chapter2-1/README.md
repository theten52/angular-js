# 安装 typescript
```
cnpm i -g typescript
```

# 转译 ts 到 js
```
tsc hello-world.ts
```
同目录下会生成一个名为“hello-world.js”的JavaScript文件。

tsc命令就是调用TypeScript编译器的命令，其作用是将指定的TypeScript文件编译成同一路径下的同名JavaScript文件。

# 自动编译TypeScript代码

## 添加tsconfig.json文件
```
{
}
```
tsconfig.json是TypeScript项目的配置文件，稍后我们将通过这个文件来配置当前项目的编译选项，但现在只需要知道VS Code发现当前项目中有这个文件时，会为当前项目创建两个任务，即“监视”和“构建”。

通过组合键“Ctrl + Shift + B”打开任务列表，选择“监视”和“构建”即可执行任务。
