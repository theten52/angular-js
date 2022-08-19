// 导入人类People、人类对象person以及生物类Biology
import { People, person, Biology } from './introduction';

// 仅在person对象是由People类构造的情况下调用其greet()方法
if (person instanceof People) {
    person.greet();
}

// 使用People类构造一个人类对象
let person1 = new People();
person1.name = person.name;
person1.age = person.age;

// person1对象是由People类构造的，其greet()函数最终会被调用
if (person1 instanceof People) {
    person1.greet();
}

// person对象是由生物类Biology构造的
if (person1 instanceof Biology) {
    console.log(`生物名：${person1.name}`);
}

// biology对象是由生物类Biology构造的，但不是由人类People构造的
let biology = new Biology();
if (biology instanceof People) {
    biology.greet();
}
