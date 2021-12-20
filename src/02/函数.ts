/*
 * @Author: will
 * @Date: 2021-12-15 14:36:12
 * @LastEditTime: 2021-12-15 15:29:25
 * @LastEditors: will
 * @Description:
 */

type GreetFn = (a: string) => void;
function greeter(fn: GreetFn) {
  //...
}

// 泛型函数
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const ssw = firstElement(["1", "2"]);
const ssd = firstElement([1, 2, 3]);

// 推断
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map([1, 2, 3], (n) => n);

type voidFn = () => void;

const k1: voidFn = () => {
  return true;
};

// 当一个函数字面量定义返回一个 void 类型，函数是一定不能返回任何东西的：
// function f2(): void {
//   return true;
// }
