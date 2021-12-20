/*
 * @Author: will
 * @Date: 2021-12-16 11:35:11
 * @LastEditTime: 2021-12-16 11:48:34
 * @LastEditors: will
 * @Description:
 */

type Point33 = { x: number; y: number };
type P = keyof Point33;

// 在 K,T之间建立约束
function getPrototypeOf<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let xx = { a: 1, c: 3 };

getPrototypeOf(xx, "a");
getPrototypeOf(xx, "c");
