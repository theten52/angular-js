export {} // 使当前文件成为一个模块

// 用户注册函数
function register(name: string, password: string, age?: number) {
    console.log(`记录注册信息-用户名：${name}，密码：${password}` + (age ? `，年龄：${age}` : ''));
}

register('Lcng', '1'); // 输出“记录注册信息-用户名：Lcng，密码：1”
register('Lcng', '1', 3); // 输出“记录注册信息-用户名：Lcng，密码：1，年龄：3”