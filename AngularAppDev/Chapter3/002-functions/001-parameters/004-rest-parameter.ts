export { } // 使当前文件成为一个模块

// 剩余参数示例

// 添加联系方式
function addContact(phone: string, ...addresses: string[]) {
    console.log(`记录联系方式-电话号码：${phone}` + (addresses && addresses.length ? `，地址：${addresses.join(',')}` : ''));
}

addContact('13111111111'); // 输出“记录联系方式-电话号码：13111111111”
// 输出“记录联系方式-电话号码：13111111111，地址：Baker Street 221B”
addContact('13111111111', 'Baker Street 221B');
// 输出“记录联系方式-电话号码：13111111111，地址：Baker Street 221B, Calle Bleeckrr 177A”
addContact('13111111111', 'Baker Street 221B', 'Calle Bleeckrr 177A');

// 错误：类型“string[]”的值不能赋给类型“string”的参数
// addContact('13111111111', ['Baker Street 221B', 'Calle Bleeckrr 177A'])

// 输出“记录联系方式-电话号码：13111111111，地址：Baker Street 221B, Calle Bleeckrr 177A”
addContact('13111111111', ...['Baker Street 221B', 'Calle Bleeckrr 177A'])
