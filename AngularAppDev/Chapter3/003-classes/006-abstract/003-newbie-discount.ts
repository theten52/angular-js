import { Discount } from "./002-discount";

export class NewbieDiscount extends Discount {
    description: string = '新用户一律5折';

    getDiscountAmount(): number {
        return this.totalAmount * 0.5;
    }
}