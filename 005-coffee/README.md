# 如何使用 vscode 调试 coffee 文件

- 使用 `coffee -c -m index.coffee` 在同名目录下生成 `index.js` 文件。 `-m` 用来生成文件映射文件。
- 配置 `vscode` 的 `launch.json` ,可以使用 `index.coffee `或者 `index.js` 来启动调试，因为有映射文件，所以最终我们都能调试 `index.coffee` 文件。且此时我们还可以在 `index.js` 中进行断点调试。
