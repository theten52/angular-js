// 导入上一节的“运行时类型判断”小节的人类People
import { People } from '../../001-types-interfaces/004-type-checking/001-introduction'

/**
 * 人类对象工厂类
 */
export class PeopleFactory {
    /**
     * 创建人类对象
     * @param json 人类对象的JSON字符串
     */
    createPerson(json: string) {
        let _person = JSON.parse(json) as People;
        let person = new People();
        person.name = _person.name;
        person.age = _person.age;
        return person;
    }
}

let json = '{"name": "Lcng", "age": "1"}';
let person: People = new PeopleFactory().createPerson(json);
person.greet(); // 输出Hi, I'm Lcng. And my age is 1