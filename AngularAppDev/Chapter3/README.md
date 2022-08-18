# ts 基本语法
## 如何使得项目为一个ts项目？
+ 在项目根目录下新建一个名为tsconfig.json的JSON文件。并按规则配置ts相关配置。这样，这个项目即可被定义为一个ts项目。
## 什么是TypeScript模块？
简单来说，任何包含顶层（Top-level）的import或export语句的TypeScript文件都是模块——以上air.ts未包含任何import或export语句，因此它不是一个模块。

嵌套在命名空间的语句也不属于模块。