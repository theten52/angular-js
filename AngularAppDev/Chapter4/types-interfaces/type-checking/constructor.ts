// 导入人类People、人类对象person以及生物类Biology
import { People, person, Biology } from './introduction';

let person1 = new People();
person1.name = person.name;
person1.age = person.age;

let biology: Biology = new Biology();
biology.name = 'T-800';

// false
if (person.constructor === People) {
    console.log('person.greet()');
    person.greet();
}

// true
if (person1.constructor === People) {
    console.log('person1.greet()');
    person1.greet();
}

// false
if (person1.constructor === Biology) {
    console.log('person1.greet() // Biology');
    person1.greet();
}

// true
if (biology.constructor === Biology) {
    console.log(`${biology.name} will be back.`);
}