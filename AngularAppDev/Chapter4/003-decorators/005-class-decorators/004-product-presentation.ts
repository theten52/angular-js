// 导入商品逻辑类、商品类和类装饰器
import { ProductLogic } from "./003-product-logic";
import { Product } from "./001-product";
import { ClassDecorator } from "./005-class-decorator";

/**
 * 商品展示类
 */
@ClassDecorator
export class ProductPresentatioin {
    /**
     * 构造商品展示对象
     * @param productLogic 商品逻辑对象
     */
    constructor(private productLogic: ProductLogic) {
    }

    // 展示商品
    present(): void {
        // 通过商品逻辑对象获取商品对象
        let product: Product = this.productLogic.getProduct(1);
        console.log(`商品名称：${product.name}`);
        console.log(`价格：${product.price}`);
    }
}