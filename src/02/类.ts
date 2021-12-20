/*
 * @Author: will
 * @Date: 2021-12-17 16:18:27
 * @LastEditTime: 2021-12-20 10:33:29
 * @LastEditors: will
 * @Description:
 */

class Point2 {
  x: number;
  y: number;
}

const pt = new Point2();

pt.x = 23;

class GoodIdea {
  name: string;
  setName(): void {
    this.name = "123";
  }
  constructor() {
    this.name = "56";
  }
}

// readonly

class Gretter {
  readonly name: string = "zs";
  constructor(otherName?: string) {
    if (otherName) {
      this.name = otherName;
    }
  }
}

const gg = new Gretter();
// gg.name = 'ff';

class Point3 {
  x: number;
  y: number;
  constructor(x = 33, y = 2) {
    this.x = x;
    this.y = y;
  }
  scale(n: number): void {
    this.x *= n;
  }
}

class Base {
  k = 4;
}

class Derver extends Base {
  constructor() {
    super();
    console.log(this.k);
  }
}

// implements 检查一个类是否满足一个特定的 interface, 如果类没有正确的实现（implements）,则ts报错

interface Ping {
  ping(): void;
}

interface Bang {
  name: string;
}

class Ball implements Ping, Bang {
  name: "dd";
  ping() {
    console.log("pong");
  }
}

// extends语句

// 类 可以 extends 一个基类， 一个派生类可以有基类的所有属性和方法，还可以定义额外的成员

class Animal {
  move() {
    console.log("move...");
  }
}

class Dog extends Animal {
  woof(times: number) {
    console.log(times);
  }
}

const dog2 = new Dog();
dog2.move();
dog2.woof(23);

// typescript 强制要求派生类总是基类的子类型

// 成员可见性
class Gretter2 {
  protected m = 10;
  private x = 0;
  static v = 30;
  public msg() {
    console.log("hi");
  }
  protected getName() {
    console.log(this.x);

    return "hi";
  }
}

const a3 = new Gretter2();
//a3.x

Gretter2.v;

class Gretter3 extends Gretter2 {
  m = 5;
  //   static name = "66";
}

// 默认为 public 可见的修饰符
// protected 成员仅仅对子类可见
// provate 私有属性，只能在类中访问，实例和派生类不能访问
// private , protected,仅仅在类型检查时才会强制生效
// static 静态成员与类实例没有关系，可以通过类本身访问的
// static 不能使用一些固定的静态名称，像name length call

// 泛型类

class BoxBig<T> {
  content: T;
  static defVal: string;
  constructor(val: T) {
    this.content = val;
  }
}

const bb = new BoxBig("45");

// this 参数

// 在typescript 方法或者函数的定义中。第一个参数且名字为this有特殊的含义。该参数在编译的时候被抹除
// typescript 会检查一个又 this的函数在调用时是否有一个正确的上下文

class Myclass {
  name: "myClass";
  getName(this: Myclass) {
    // 强制this指向 Myclass 类
    return this.name;
  }
}

// 类表达式
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const mk = new someClass("Hello, World");
