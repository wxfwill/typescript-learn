/*
 * @Author: will
 * @Date: 2021-12-16 12:22:15
 * @LastEditTime: 2021-12-16 12:42:03
 * @LastEditors: will
 * @Description:
 */

// typescript 的typeof可以在类型上下文中使用，用于获取一个变量或者属性的类型

let s = "hello";
let nm: typeof s;

function f() {
  return { x: 2, y: 3 };
}
type Y = ReturnType<typeof f>;

// typeof 只能对标识符和属性使用

// 对象使用 typeof
const person = { name: "ki", age: 18 };
type K = typeof person;
