// 导入商品数据类、商品类和类装饰器
import { ProductData } from "./002-product-data";
import { Product } from "./001-product";
import { ClassDecorator } from "./005-class-decorator";

/**
 * 商品逻辑类
 */
@ClassDecorator // 使用类装饰器装饰商品逻辑类
export class ProductLogic {
    /**
     * 构造商品逻辑对象
     * @param productData 商品数据对象
     */
    constructor(private productData: ProductData) {
    }

    /**
     * 获取指定ID的商品
     * @param id 目标商品ID
     */
    getProduct(id: number): Product {
        // 通过商品数据对象获取商品
        let product: Product = this.productData.getProduct(id);
        // 计算商品的折扣价
        product.price *= 0.5;

        return product;
    }
}