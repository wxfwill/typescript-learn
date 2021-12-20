/*
 * @Author: will
 * @Date: 2021-12-16 12:41:57
 * @LastEditTime: 2021-12-16 14:01:36
 * @LastEditors: will
 * @Description:
 */

type PersonType = { age: number; name: string; alive: boolean };

type Age = PersonType["age"];

type A1 = PersonType["age" | "name"];

type A2 = PersonType[keyof PersonType];

// type A3 = PersonType["d"]; // 访问不存在的属性报错

const APP = ["taobao", "tmall"] as const;

type app = typeof APP[number];
