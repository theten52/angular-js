(function (global) {
    System.config({
        paths: { // 路径变量
            'npm:': 'node_modules/'
        },
        map: { // 路径映射
            'rxjs': 'npm:rxjs', // RxJS包路径
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js', // Angular核心包路径，其中npm:会被为上面定义的路径变量npm的值替换
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js', // Angular通用功能包路径
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js', // Angular浏览器平台包路径
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js', // Angular编译器包路径
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js' // Angular浏览器平台动态启动包路径
        },
        packages: { // 路径配置
            'src': { // 应用程序源代码路径配置
                defaultExtension: 'js' // 应用程序源代码路径下的文件的默认后缀
            },
            'rxjs': { // RxJS包路径配置
                main: 'index.js', // RxJS包的默认文件
                defaultExtension: 'js' // RxJS包路径下的文件的默认后缀
            },
            'rxjs/operators': { // RxJS操作函数路径配置
                main: 'index.js' // RxJS操作函数的默认文件
            }
        }
    });
})();