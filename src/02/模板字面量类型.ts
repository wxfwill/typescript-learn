/*
 * @Author: will
 * @Date: 2021-12-17 15:34:00
 * @LastEditTime: 2021-12-17 16:04:21
 * @LastEditors: will
 * @Description:
 */

type PropsEventSource<Type> = {
  on(eventName: `${string & keyof Type}Changes`, callback: (newValue: any) => void);
};

type PropsEventSource1<Type> = {
  on(eventName: `${Exclude<keyof Type, symbol>}Changed`, callback: (val: any) => void);
};

type PropsEventSource2<Type> = {
  on(eventName: `${Extract<keyof Type, string>}Changed`, callback: (val: any) => void);
};

type PropsEventSource3<Type> = {
  on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

declare function makeObj<Type>(obj: Type): Type & PropsEventSource3<Type>;

const person1 = makeObj({
  firstName: "zs",
  age: 23,
});

person1.on("firstNameChanged", (newName) => {
  console.log(`new name is ${newName.toUpperCase()}`);
});

person1.on("ageChanged", (age) => {
  console.log(age);
});

// 内置字符操作类型

//Uppercase  // 转成大写

type Gree = "hello, world";
type GreeUpper = Uppercase<Gree>;

// Uppercase

// Lowercase // 转成小写

type Greeting = "Hello, World";
type GreeLowerCase = Lowercase<Greeting>;

// Lowercase

// Capitalize // 首字母大写
type LowercaseString = "hello,sam";
type Str2 = Capitalize<LowercaseString>;

// Capitalize

// Uncapitalize // 首字母小写
type UncapitalizeString = "HELLO, WORLD";
type UncapitalizeStr = Uncapitalize<UncapitalizeString>;
