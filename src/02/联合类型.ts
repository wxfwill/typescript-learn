/*
 * @Author: will
 * @Date: 2021-12-13 11:33:04
 * @LastEditTime: 2021-12-13 11:59:06
 * @LastEditors: will
 * @Description:
 */

let num: 1 | 2 = 2;
type EventNames = "click" | "scroll" | "mousemove";

// & 交叉类型
type Pointx = { x: number };
type Point = Pointx & { y: number };

let point: Point = {
  x: 2,
  y: 6,
};
