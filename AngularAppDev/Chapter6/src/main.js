"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // 导入浏览器平台创建函数
var app_module_1 = require("./app.module"); // 导入AppModule
var platform = platform_browser_dynamic_1.platformBrowserDynamic(); // 创建浏览器平台
platform.bootstrapModule(app_module_1.AppModule); // 加载根模块AppModule
//# sourceMappingURL=main.js.map