// 导入商品类
import { Product } from './001-product';

/**
 * 商品数据类
 */
export class ProductData {
    /**
     * 获取指定ID的商品
     * @param id 目标商品的ID
     */
    getProduct(id: number): Product {
        // 模拟从数据库中获取商品对象
        let product = new Product();
        product.id = id;
        product.name = '赣南脐橙';
        product.price = 10;

        return product;
    }
}