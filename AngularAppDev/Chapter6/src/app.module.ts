import { NgModule } from '@angular/core'; // 导入模块装饰器的定义
import { BrowserModule } from '@angular/platform-browser'; // 导入浏览器模块的定义
import { AppComponent } from './app.component'; // 导入组件AppComponent的定义

@NgModule({
    imports: [BrowserModule], // 导入浏览器模块
    declarations: [AppComponent], // 声明组件AppComponent为当前模块内的组件
    bootstrap: [AppComponent] // 从组件AppComponent启动
})
export class AppModule {
    // 模块中通常不需要包含任何代码
}