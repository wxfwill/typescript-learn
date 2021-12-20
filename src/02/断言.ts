/*
 * @Author: will
 * @Date: 2021-12-13 10:24:21
 * @LastEditTime: 2021-12-15 12:00:28
 * @LastEditors: will
 * @Description:
 */

// 尖括号语法
let someValue: any = "this is a string";
let strlength: number = (<string>someValue).length;

// as语法
let someValue2: any = "this is a string";
let strlength2: number = (someValue2 as string).length;

// 非空断言
// x! 将x 值域中排除 null 和 undefined

// 忽略 undefined 和 null
function myFun(title: string | undefined | null) {
  const testTitle: string = title!;
  const test2: string = title!;
  console.log(testTitle);
  console.log(test2);
}

myFun(null);

// 调用函数时忽略undefined

type NumGener = () => number;
function myFun1(numgener: NumGener | undefined) {
  const num1 = numgener!();
  const num2 = numgener!();
  console.log(num1);
  console.log(num2);
}

// 确定赋值断言
let x!: number;
initalize();
console.log(x * 2);

function initalize() {
  x = 10;
}
