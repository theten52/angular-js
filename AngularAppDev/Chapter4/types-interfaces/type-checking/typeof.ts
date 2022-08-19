// 导入人类People和人类对象
import { People, person } from './introduction';

let runtimeTypeOfPerson: string = typeof person; // 得到字符串“object”


/**
 * 字符串拼接函数
 * @param x 参与拼接的参数，这个参数可能来自第三方JavaScript库，因此其类型不确定
 * @param y 参与拼接的参数，这个参数可能来自第三方JavaScript库，因此其类型不确定
 */
function concatenate(x: any, y: any): string {
    if (typeof x !== 'string') {
        x = x.toString();
    }

    if (typeof y !== 'string') {
        y = y.toString();
    }

    return x + y;
}