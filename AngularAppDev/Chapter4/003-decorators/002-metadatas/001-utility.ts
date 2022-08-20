// 导入前面新定义的人类People
import { People, Address } from "../001-introduction/001-introduction";

/**
 * 为人类People定义元数据
 */
export function setPeopleMetadata() {
    let _people = People as any;
    _people.__metadata = {
        name: {
            constructor: String
        },
        age: {
            constructor: Number
        },
        address: {
            constructor: Address
        }
    };
}

/**
 * 为地址类定义元数据
 */
export function setAddressMetadata() {
    let _address = Address as any;
    _address.__metadata = {
        street: {
            constructor: String
        },
        houseNumber: {
            constructor: Number
        }
    }
}