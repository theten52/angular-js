requirejs(
    ["helper/util", "helper/math"],
    function (util, math) {
        //此函数在加载scripts/helper/util.js时调用。
        //如果util.js调用define()，则直到
        //util的依赖项已加载，util参数将保持
        //“helper/util"的模块值。
        console.log("require js 已经加载");
        console.log("1+1=", math.add(1, 1))
    }
);