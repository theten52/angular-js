export {} // 使当前文件成为一个模块

enum Sex {
    Female, // 0
    Male, // 1
    Secret // 2
}

enum SalaryLevel {
    Low = 1000,
    Middle = 10000,
    High = 100000
}

let sex: Sex = Sex.Female;
sex = Sex.Male;
let salaryLevel: SalaryLevel = SalaryLevel.High;
salaryLevel = SalaryLevel.Low;

let secretSex: Sex = 2; // 将数字赋给枚举Sex类型的变量
let highSalaryLevel: SalaryLevel = 100000; // 将数字赋给枚举SalaryLevel类型的变量
let male: number = Sex.Male; // 将枚举类型Sex的成员赋给数字类型的变量
let lowSalaryLevel: number = SalaryLevel.Low; // 将枚举类型SalaryLevel的成员赋给数字类型的变量

secretSex = 3;
highSalaryLevel = 20;

let sexName: string = Sex[1]; // 获取字符串Male
let salaryLevelName: string = SalaryLevel[10000]; // 获取字符串Middle

salaryLevelName = SalaryLevel[0]; // 无法获取第0个成员的名称，返回undefined

// 综合运用
enum Privilage {
    None = 0,
    Read = 1 << 0, // 1, 0b0001
    Write = 1 << 1, // 2, 0b0010

    Create = 1 << 2, // 4, 0b0100

    Delete = 1 << 3, // 8, 0b1000

    All = ~(~0 << 4) // 15, 0b1111
}

// 目录A需要的权限
let desiredPrivilageOfDirectA: Privilage = Privilage.Read | Privilage.Create;

/**
 * 判断提供的权限是否涵盖期望的权限
 * @param desiredPrivilage 期望的权限
 * @param providedPrivilage 提供的权限
 */
function permit(desiredPrivilage: Privilage, providedPrivilage: Privilage) {
    // 参数不合法
    if (!desiredPrivilage || !providedPrivilage) {
        return false;
    }

    // 提供的权限未涵盖期望的权限
    if (desiredPrivilage !== (desiredPrivilage & providedPrivilage)) {
        return false;
    }

    // 提供的权限涵盖了期望的权限
    return true;
}

// 模拟用户权限
let privilageOfUserA: Privilage = Privilage.Create; // 只具备新建的权限
let privilageOfUserB: Privilage = Privilage.Read | Privilage.Delete; // 同时具备读和删的权限
let privilageOfUserC: Privilage = Privilage.Create | Privilage.Write; // 同时具备新建和写的权限
let privilageOfUserD: Privilage = Privilage.Read | Privilage.Create; // 同时具备读和新建的权限
let privilageOfUserE: Privilage = Privilage.All; // 同时具备所有权限

// 判断用户是否具备访问目录A的权限
let isUserAPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserA); // false
let isUserBPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserB); // false
let isUserCPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserC); // false
let isUserDPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserD); // true
let isUserEPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserE); // true