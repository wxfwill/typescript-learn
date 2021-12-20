/*
 * @Author: will
 * @Date: 2021-12-16 14:37:01
 * @LastEditTime: 2021-12-17 15:00:48
 * @LastEditors: will
 * @Description:
 */

type Flatten<T> = T extends any[] ? T[number] : T;

// T[number] 索引访问类型

type Str = Flatten<string[]>;

type Num = Flatten<number>;

// 条件类型里面推断
type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

// 分发条件类型
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNum = ToArray<string | number>;

// string[] | number[]

type ToArray2<Type> = [Type] extends [any] ? Type[] : never;

type StrArr2 = ToArray2<number | string | boolean>;
