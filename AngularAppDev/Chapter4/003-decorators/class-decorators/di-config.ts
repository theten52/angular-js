// 导入reflect-metadata
import 'reflect-metadata';
// 导入依赖注入器、目标类和映射类类
import { DependencyInjector } from './dependency-injector';
import { ProductData } from './product-data';
import { ProductLogic } from './product-logic';
import { ProductPresentatioin } from './product-presentation';
import { DbProductData } from './db-product-data';

// 注册类映射
export function config(): void {
    // DependencyInjector.register(ProductData, ProductData);
    DependencyInjector.register(ProductData, DbProductData);
    DependencyInjector.register(ProductLogic, ProductLogic);
    DependencyInjector.register(ProductPresentatioin, ProductPresentatioin);
}