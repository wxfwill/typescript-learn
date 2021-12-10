/*
 * @Author: will
 * @Date: 2021-12-10 09:53:40
 * @LastEditTime: 2021-12-10 11:05:56
 * @LastEditors: will
 * @Description:
 */

let isDone: boolean = false;
let count: number = 1;
let name1: string = "zs";

// const sym = Symbol();
// let obj = {
//   [sym]: "sz",
// };
// console.log(obj[sym]);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Array:number; 泛型语法

// 数字枚举
enum SendType {
  ONE,
  TWO,
  THREE,
}
let dir: SendType = SendType.ONE;
// 字符串枚举
enum Type {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

// unknown 类型
let a: unknown;
a = 1;
a = "22";
a = {};
a = [];
a = null;

let n: any = a;
let j: unknown = a;

// tuple 类型 元组 是 ts 中的特有类型

let tupleType: [boolean, number];
tupleType = [true, 2];

// void 类型， 与any类型相反
const test = (): void => {
  console.log("666");
  //   return 66;
};

// null undefined
let h: null = null;
let m: undefined = undefined;

// never
type Foo = string | number;

function createPerson(foo: Foo) {
  if (typeof foo === "string") {
    console.log(foo);
  } else if (typeof foo === "number") {
    console.log(foo + "number");
  } else {
    let check: never = foo;
    console.log(check);
  }
}

createPerson("56");
