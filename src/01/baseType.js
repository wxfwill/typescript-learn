/*
 * @Author: will
 * @Date: 2021-12-10 09:53:40
 * @LastEditTime: 2021-12-10 11:05:56
 * @LastEditors: will
 * @Description:
 */
var isDone = false;
var count = 1;
var name1 = "zs";
// const sym = Symbol();
// let obj = {
//   [sym]: "sz",
// };
// console.log(obj[sym]);
var list = [1, 2, 3];
var list2 = [1, 2, 3]; // Array:number; 泛型语法
// 数字枚举
var SendType;
(function (SendType) {
    SendType[SendType["ONE"] = 0] = "ONE";
    SendType[SendType["TWO"] = 1] = "TWO";
    SendType[SendType["THREE"] = 2] = "THREE";
})(SendType || (SendType = {}));
var dir = SendType.ONE;
// 字符串枚举
var Type;
(function (Type) {
    Type["ONE"] = "1";
    Type["TWO"] = "2";
    Type["THREE"] = "3";
})(Type || (Type = {}));
// unknown 类型
var a;
a = 1;
a = "22";
a = {};
a = [];
a = null;
var n = a;
var j = a;
// tuple 类型 元组 是 ts 中的特有类型
var tupleType;
tupleType = [true, 2];
// void 类型， 与any类型相反
var test = function () {
    console.log("666");
    //   return 66;
};
// null undefined
var h = null;
var m = undefined;
function createPerson(foo) {
    if (typeof foo === "string") {
        console.log(foo);
    }
    else if (typeof foo === "number") {
        console.log(foo + "number");
    }
    else {
        var check = foo;
        console.log(check);
    }
}
createPerson("56");
