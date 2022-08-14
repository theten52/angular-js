import { Component} from '@angular/core'; // 导入组件装饰器
import { PetService } from './pet.service'; // 导入宠物类

// 将普通TypeScript类AppComponent装饰成组件类
@Component({
    templateUrl: 'src/app.html'
})
export class AppComponent {
    petCount: number; // 宠物数量
    pets: Array<{ family: string, name: string, price: number }>; // 宠物数组

    /**
     * 构造组件实例
     */
    constructor() {
        let petService: PetService = new PetService(); // 创建服务实例
        
        this.petCount = petService.getPetCount(); // 获取宠物库存
        this.pets = petService.getPets(); // 获取宠物数组
    }
}