/*
 * @Author: will
 * @Date: 2021-12-15 17:47:38
 * @LastEditTime: 2021-12-16 10:16:59
 * @LastEditors: will
 * @Description:
 */

// 有的时候，你不能提前知道一个类型里的所有属性的名字，但是你知道这些值的特征。

//这种情况，你就可以用一个索引签名 (index signature) 来描述可能的值的类型，举个例子：

// 索引签名

interface StringArray {
  [index: number]: string;
}

const myArr: StringArray = ["w", "2"];
const firstItem = myArr[1];

interface NumType {
  readonly [index: string]: number | string;
  length: number;
  name: string;
}

// 属性继承
interface Person {
  age: number;
  name: string;
  face?: string;
}
interface Skill {
  xiao: string;
}

interface Man extends Person {
  unit: string;
}

// 多个继承
interface Woman extends Person, Skill {
  ha: string;
}

// 交叉类型
interface Color {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorOrCircle = Color & Circle;

// 交叉类型与接口继承的不同在于冲突怎么处理

// 继承重写类型会报错，但交叉类型不会的， 交叉类型是取的两者的交集

// 泛型对象类型
interface Box<Type> {
  content: Type;
}

let obj: Box<string> = { content: "" };

function dosomething(value: Array<string>) {
  //...
}

let myArr2: string[] = ["a", "b"];

dosomething(myArr2);

const roArray: ReadonlyArray<number> = [1, 2, 3];
const roArray2: readonly string[] = ["k"];

// 元组类型

// 另外一种数组，明确知道包含数组有多少个元素，每个元素类型都知道时，适合用元组类型

type StringNum = [string, number];

let tupArr: StringNum = ["9", 2];

// console.log(tupArr[2]);
