# 相对导入和非相对导入
+ 相对导入
+ 非相对导入

# Typescript导入策略
+ Classic策略
  + Classic策略下的非相对模块导入，它会尝试按照以下顺序查找目标模块：
    ```
    （1）modules/resolution/classic.ts；
    （2）modules/resolution/classic.d.ts；
    （3）modules/classic.ts；
    （4）modules/classic.d.ts；
    （5）classic.ts；
    （6）classic.d.ts。
    ```
  + Classic策略下的相对模块导入被指定了明确的相对路径，因此***不会***逐级地从上级目录中查找目标模块。
    ```
    import { greeting as hi } from './classic'; // 相对导入当前目录下的模块classic.ts
    console.log(hi);                            // 输出"hi..."

    import { name as lcng } from '../classic1'; // 相对导入上级目录下的模块classic1.ts
    console.log(lcng);                          // 输出"Lcng"

    第一条import语句将尝试按照以下顺序查找目标模块：
    （1）modules/resolution/classic.ts；
    （2）modules/resolution/classic.d.ts。
    第二条import语句将尝试按照以下顺序查找目标模块：
    （1）modules/classic1.ts；
    （2）modules/classic1.d.ts。
    ```
+ Node策略
  + Node策略下的非相对模块导入，它会尝试按照以下顺序查找目标模块：
    ```
    （1）modules/resolution/node_modules/classic.ts；
    （2）modules/resolution/node_modules/classic.tsx；
    （3）modules/resolution/node_modules/classic.d.ts；
    （4）modules/resolution/node_modules/classic/package.json（导入其types或typings指向的模块）；
    （5）modules/resolution/node_modules/classic/index.ts；
    （6）modules/resolution/node_modules/classic/index.tsx；
    （7）modules/resolution/node_modules/classic/index.d.ts；
    （8）modules/node_modules/classic.ts；
    （9）modules/node_modules/classic.tsx；
    （10）modules/node_modules/classic.d.ts；
    （11）modules/node_modules/classic/package.json（导入其types或typings指向的模块）；
    （12）modules/node_modules/classic/index.ts；
    （13）modules/node_modules/classic/index.tsx；
    （14）modules/node_modules/classic/index.d.ts；
    （15）node_modules/classic.ts；
    （16）node_modules/classic.tsx；
    （17）node_modules/classic.d.ts；
    （18）node_modules/classic/package.json（导入其types或typings指向的模块）；
    （19）node_modules/classic/index.ts；
    （20）node_modules/classic/index.tsx；
    （21）node_modules/classic/index.d.ts。
    ```
    + 可以看到，Node策略下的非相对模块导入看上去不只是略有复杂，而是复杂了很多。但其实这一复杂之下遵循着简单的规律：
      + （1）查找当前目录下名为node_modules的子目录下与import语句中from标识符后面的模块路径同名的.ts、.tsx和.d.ts文件，以及这个子目录下与模块路径同名的子目录下名为package.json、index.ts、index.tsx和index.d.ts的文件；
      + （2）从当前目录的父目录开始逐级向上查找更上级目录下名为node_modules的子目录，并对这些子目录执行以上文件查找尝试；
      + （3）查找最终在项目根目录下名为node_modules的目录中结束，如果此时没有找到目标模块，那么TypeScript编译器会抛出相应的异常。
  + 相对模块导入在Node策略下比在Classic策略下略显复杂，除了会将from标识符后面的路径当作一个文件的路径，还会将它当作一个目录的路径，并尝试导入这个目录下名为package.json的JSON文件中的types或typings属性所列举的模块，或尝试导入这个目录下名为index.ts、index.tsx或index.d.ts的模块。
    ```
    （1）modules/resolution/classic.ts；
    （2）modules/resolution/classic.tsx；
    （3）modules/resolution/classic.d.ts；
    （4）modules/resolution/classic/package.json（导入这个文件的types或typings属性指向的模块）；
    （5）modules/resolution/classic/index.ts；
    （6）modules/resolution/classic/index.tsx；
    （7）modules/resolution/classic/index.d.ts；
    （8）modules/person.ts；
    （9）modules/person.tsx；
    （10）modules/person.d.ts；
    （11）modules/person/package.json（导入这个文件的types或typings属性指向的模块）；
    ```

如何配置？
```json
{
  "compilerOptions": { // 编译器选项
    "moduleResolution": "node" // 指定模块解析策略
  }
}
```