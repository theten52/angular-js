// 导入reflect-metadata
import 'reflect-metadata';
// 导入前面新定义的人类People
import { People, Address } from "../introduction";

/**
 * 为人类People定义元数据
 */
export function setPeopleMetadata() {
    Reflect.defineMetadata('__metadata', {
        name: {
            constructor: String
        },
        age: {
            constructor: Number
        },
        address: {
            constructor: Address
        }
    }, People);
}

/**
 * 为地址类定义元数据
 */
export function setAddressMetadata() {
    Reflect.defineMetadata('__metadata', {
        street: {
            constructor: String
        },
        houseNumber: {
            constructor: Number
        }
    }, Address);
}