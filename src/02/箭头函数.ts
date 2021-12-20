/*
 * @Author: will
 * @Date: 2021-12-13 12:09:45
 * @LastEditTime: 2021-12-13 12:27:55
 * @LastEditors: will
 * @Description:
 */

// 参数类型和返回类型
function createUserId(name: string, age: number): string {
  return name + age;
}

// 函数类型
let IdFun: (name: string, num: number) => string;
function createUse(name: string, num: number): string {
  return name + num;
}
IdFun = createUse;

// 可选参数
function hello(name: string, id: number, age?: number): string {
  return name + id;
}

// 默认参数
const world = (name: string = "zs", id: number, age?: number): string => {
  return name + id;
};

// 剩余参数
const pushItem = (arr: number[], ...items: number[]): number[] => {
  items.forEach((item) => {
    arr.push(item);
  });
  return arr;
};

// 函数重载
