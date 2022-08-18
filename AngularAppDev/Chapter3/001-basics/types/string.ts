export {} // 使当前文件成为一个模块

let firstName: string = "L"; // 双引号包围的字符串
let lastName: string = 'cng'; // 单引号包围的字符串

let age: number = 100; // 数字
let nameAndAge: string = firstName + lastName + age; // 拼接字符串和数字：Lcng100

let greeting: string = `Hi, every body.
My name is ${firstName + lastName}.
I am ${age} years old..
` // 这个字符串包含三行内容，但我们没有使用+进行性拼接

let s = `
Hi, every body.
My name is Lcng.
I am 100 years old..
`