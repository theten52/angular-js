"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义宠物服务类
var PetService = /** @class */ (function () {
    function PetService() {
        // 宠物数组——模拟的宠物数据
        this.pets = [{
                family: 'Dog',
                name: 'Spike',
                price: 12.3
            }, {
                family: 'Cat',
                name: 'Tom',
                price: 1.2
            }];
    }
    // 获取宠物库存
    PetService.prototype.getPetCount = function () {
        return this.pets.length;
    };
    // 获取宠物数组
    PetService.prototype.getPets = function () {
        return this.pets;
    };
    return PetService;
}());
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map