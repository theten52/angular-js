export {} // 使当前文件成为一个模块

// 耳机接口
interface Earphone {
    // 输出声音
    output(voice: string):void;
}

// 耳机抽象类
abstract class AbstractEarphone {
    // 输出声音
    abstract output(voice: string):void;
}

// 小米耳机类
class XiaoMiEarphone implements Earphone {
    // 输出声音
    output(voice: string): void {
        console.log(`来自小米耳机的输出：${voice}`);
    }

    // 声音输入
    input(voice: string): void {
        console.log(`小米耳机接收到的输入：${voice}`);
    }
}

// 苹果耳机
class AppleEarphone extends AbstractEarphone {
    // 输出声音
    output(voice: string): void {
        console.log(`来自苹果耳机的输出：${voice}`);
    }
}

// 另一个耳机接口：接口合并
interface Earphone {
    // 输入声音
    input(voice: string): void;
}

// 小米耳机接口：通过接口对类进行扩展
interface XiaoMiEarphone {
    // 降噪
    denoise():void;
}

let xiaoMiEarphone: XiaoMiEarphone = new XiaoMiEarphone();
// xiaoMiEarphone.denoise(); // 运行时错误：xiaoMiEarphone.denoise不是一个方法

// 在原型上实现降噪方法
XiaoMiEarphone.prototype.denoise = function() {
    console.log('降噪功能开启');
}
let xiaoMiEarphone1: XiaoMiEarphone = new XiaoMiEarphone();
xiaoMiEarphone1.denoise();