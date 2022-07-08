"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sex;
(function (Sex) {
    Sex[Sex["Female"] = 0] = "Female";
    Sex[Sex["Male"] = 1] = "Male";
    Sex[Sex["Secret"] = 2] = "Secret"; // 2
})(Sex || (Sex = {}));
var SalaryLevel;
(function (SalaryLevel) {
    SalaryLevel[SalaryLevel["Low"] = 1000] = "Low";
    SalaryLevel[SalaryLevel["Middle"] = 10000] = "Middle";
    SalaryLevel[SalaryLevel["High"] = 100000] = "High";
})(SalaryLevel || (SalaryLevel = {}));
var sex = Sex.Female;
sex = Sex.Male;
var salaryLevel = SalaryLevel.High;
salaryLevel = SalaryLevel.Low;
var secretSex = 2; // 将数字赋给枚举Sex类型的变量
var highSalaryLevel = 100000; // 将数字赋给枚举SalaryLevel类型的变量
var male = Sex.Male; // 将枚举类型Sex的成员赋给数字类型的变量
var lowSalaryLevel = SalaryLevel.Low; // 将枚举类型SalaryLevel的成员赋给数字类型的变量
secretSex = 3;
highSalaryLevel = 20;
var sexName = Sex[1]; // 获取字符串Male
var salaryLevelName = SalaryLevel[10000]; // 获取字符串Middle
salaryLevelName = SalaryLevel[0]; // 无法获取第0个成员的名称，返回undefined
// 综合运用
var Privilage;
(function (Privilage) {
    Privilage[Privilage["None"] = 0] = "None";
    Privilage[Privilage["Read"] = 1] = "Read";
    Privilage[Privilage["Write"] = 2] = "Write";
    Privilage[Privilage["Create"] = 4] = "Create";
    Privilage[Privilage["Delete"] = 8] = "Delete";
    Privilage[Privilage["All"] = 15] = "All"; // 15, 0b1111
})(Privilage || (Privilage = {}));
// 目录A需要的权限
var desiredPrivilageOfDirectA = Privilage.Read | Privilage.Create;
/**
 * 判断提供的权限是否涵盖期望的权限
 * @param desiredPrivilage 期望的权限
 * @param providedPrivilage 提供的权限
 */
function permit(desiredPrivilage, providedPrivilage) {
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
var privilageOfUserA = Privilage.Create; // 只具备新建的权限
var privilageOfUserB = Privilage.Read | Privilage.Delete; // 同时具备读和删的权限
var privilageOfUserC = Privilage.Create | Privilage.Write; // 同时具备新建和写的权限
var privilageOfUserD = Privilage.Read | Privilage.Create; // 同时具备读和新建的权限
var privilageOfUserE = Privilage.All; // 同时具备所有权限
// 判断用户是否具备访问目录A的权限
var isUserAPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserA); // false
var isUserBPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserB); // false
var isUserCPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserC); // false
var isUserDPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserD); // true
var isUserEPermitted = permit(desiredPrivilageOfDirectA, privilageOfUserE); // true
//# sourceMappingURL=enum.js.map