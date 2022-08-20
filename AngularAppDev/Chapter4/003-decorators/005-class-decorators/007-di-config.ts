// 导入reflect-metadata
import 'reflect-metadata';
// 导入依赖注入器、目标类和映射类类
import { DependencyInjector } from './006-dependency-injector';
import { ProductData } from './002-product-data';
import { ProductLogic } from './003-product-logic';
import { ProductPresentatioin } from './004-product-presentation';
import { DbProductData } from './008-db-product-data';

// 注册类映射
export function config(): void {
    // DependencyInjector.register(ProductData, ProductData);
    DependencyInjector.register(ProductData, DbProductData);
    DependencyInjector.register(ProductLogic, ProductLogic);
    DependencyInjector.register(ProductPresentatioin, ProductPresentatioin);
}