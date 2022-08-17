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

# 调试 ts 代码
## 通过Node.js快速地执行JavaScript代码
```
node hello-world.js
```
## 调试 js 代码
+ 打开要调试的文件，如hello-world.js。（打开很重要，vscode默认调试打开的文件）
  + 按下键盘上的F5键”选项，然后从弹出的菜单中选择“启动调试(S)”命令。
  + 或者：
  + 单击VS Code工具栏中的“调试(D)，然后选择“运行与调试”即可。
## 调试 ts 代码
+ 配置编译选项，如下：
```json
{    
    "compilerOptions": {  // 编译器选项       
        "sourceMap": true  // 生成映射文件    
    }
}
```
以上配置使用的ts代码被编译后生成相应的map文件，map文件是我们调试ts的基础。

+ 打开要调试的文件，如hello-world.ts。（打开很重要，vscode默认调试打开的文件）
  + 按下键盘上的F5键”选项，然后从弹出的菜单中选择“启动调试(S)”命令。
  + 或者：
  + 单击VS Code工具栏中的“调试(D)，然后选择“运行与调试”即可。

## 如何使得 ts 文件成为模块？
+ 使用`export`关键字。
+ 使用`import`关键字。

## node 运行 ts 文件
```terminal
node hello-world.js // 运行 ts 文件时，实际是运行其对应的js文件。
node hello-world // 以省略后缀的方式运行 ts 文件。
```