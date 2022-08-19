// 导入依赖注入器
import { DependencyInjector } from './dependency-injector';
// 导入依赖映射注册函数
import { config } from './di-config';
// 导入商品展示类和商品逻辑类
import { ProductPresentatioin } from "./product-presentation";
import { ProductLogic } from './product-logic';

// 注册依赖映射
config();

// // 通过依赖注入器获取商品逻辑实例
// let productLogic = DependencyInjector.getService(ProductLogic);

// // 创建商品展示实例，并展示商品
// let productPresentation = new ProductPresentatioin(productLogic);
// productPresentation.present();

// 通过依赖注入器获取商品展示实例
let productPresentation = DependencyInjector.getService(ProductPresentatioin);
productPresentation.present();