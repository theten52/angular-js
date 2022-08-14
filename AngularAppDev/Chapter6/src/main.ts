import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // 导入浏览器平台创建函数
import { AppModule } from './app.module'; // 导入AppModule

const platform = platformBrowserDynamic(); // 创建浏览器平台
platform.bootstrapModule(AppModule); // 加载根模块AppModule