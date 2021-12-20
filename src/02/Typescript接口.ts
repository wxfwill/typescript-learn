/*
 * @Author: will
 * @Date: 2021-12-13 12:30:52
 * @LastEditTime: 2021-12-13 14:33:12
 * @LastEditors: will
 * @Description:
 */

interface Person {
  name: string;
  age: number;
  readonly id: number;
  skill?: string;
  [proName: string]: any; // 任意属性
}

let zs: Person = {
  name: "zs",
  age: 18,
  id: 12,
  sex: 0,
};

// 接口和类型别名都是用来描述形状和函数签名的

// 类型别名可用于一些其他类型，比如原始类型，联合类型和数组
// 接口和类型别名都能被扩展，接口可以扩展类型别名，而反过来是不行的
