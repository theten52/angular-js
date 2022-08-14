"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); // 导入组件装饰器
var pet_service_1 = require("./pet.service"); // 导入宠物类
// 将普通TypeScript类AppComponent装饰成组件类
var AppComponent = /** @class */ (function () {
    /**
     * 构造组件实例
     */
    function AppComponent() {
        var petService = new pet_service_1.PetService(); // 创建服务实例
        this.petCount = petService.getPetCount(); // 获取宠物库存
        this.pets = petService.getPets(); // 获取宠物数组
    }
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/app.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map