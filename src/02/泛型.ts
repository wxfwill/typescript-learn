/*
 * @Author: will
 * @Date: 2021-12-13 14:30:56
 * @LastEditTime: 2021-12-16 11:48:37
 * @LastEditors: will
 * @Description:
 */

function identity<T>(value: T): T {
  return value;
}

identity<number>(1);
identity(3);

const ident2 = <T, U>(val: T, msg: U): T => {
  return val;
};

ident2<number, string>(10, "hello world");
ident2(2, "nihao");

// 泛型接口
interface Fun<T> {
  (arg: T): T;
}

interface LenghWise {
  length: number;
}

function logger<T extends LenghWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logger({ length: 3, sex: 1 });

interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength: number;
}

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape1 = Circle | Square;

function getArea1(shape: Shape1) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getArea2(shape: Shape1) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _defalut: never = shape;
      return _defalut;
  }
}

// 泛型函数
function identity2<Type>(arg: Type): Type {
  return arg;
}

let identity6: <Type>(arg: Type) => Type = identity2;

let myIndent: { <Type>(arg: Type): Type } = identity2;

interface GenerFn {
  <Type>(arg: Type): Type;
}

interface GenerFn1<Type> {
  (arg: Type): Type;
}

let myIndent3: GenerFn = identity2;

let myIndent4: GenerFn1<number> = identity2;

// 泛型类

class GenerNumber<Type> {
  value: Type;
  add: (x: Type, y: Type) => Type;
}

let myInstance = new GenerNumber<number>();
myInstance.value = 12;
myInstance.add = function (x, y) {
  return x + y;
};

// 泛型约束
function loggerIndent<Type>(arg: Type): Type {
  //   console.log(arg.length); // 不添加约束会报错
  return arg;
}

interface Lengthwise {
  length: number;
}

// 添加约束
function loggerIndent1<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

loggerIndent1({ length: 2, value: 3 });
