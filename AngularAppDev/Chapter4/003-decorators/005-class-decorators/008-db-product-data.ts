// 导入商品类
import { Product } from './001-product';

/**
 * 数据库商品数据类
 */
export class DbProductData {
    /**
     * 获取指定ID的商品
     * @param id 目标商品的ID
     */
    getProduct(id: number): Product {
        // 请将以下代码当作后端同事写的数据库访问代码
        let product = new Product();
        product.id = id;
        product.name = '数据库中的赣南脐橙';
        product.price = 12;

        return product;
    }
}