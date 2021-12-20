/*
 * @Author: will
 * @Date: 2021-12-17 15:03:31
 * @LastEditTime: 2021-12-17 15:33:24
 * @LastEditors: will
 * @Description:
 */

type OnlyBooleanAndHorss = {
  [key: string]: boolean;
};
const conforms: OnlyBooleanAndHorss = {
  del: true,
  rodeny: false,
};

type OptionFlages<Type> = {
  [Property in keyof Type]: boolean | number;
};

type FeatureFlags = {
  darkMode: () => void;
  newUser: () => void;
};

type FeatureOptions = OptionFlages<FeatureFlags>;
