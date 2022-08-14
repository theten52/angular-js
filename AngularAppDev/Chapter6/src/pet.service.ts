// 定义宠物服务类
export class PetService {
    // 宠物数组——模拟的宠物数据
    private pets: Array<{ family: string, name: string, price: number }> = [{
        family: 'Dog',
        name: 'Spike',
        price: 12.3
    }, {
        family: 'Cat',
        name: 'Tom',
        price: 1.2
    }];

    // 获取宠物库存
    getPetCount(): number {
        return this.pets.length;
    }

    // 获取宠物数组
    getPets(): Array<{ family: string, name: string, price: number }> {
        return this.pets;
    }
}