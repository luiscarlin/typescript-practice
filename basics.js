import * as _ from "lodash";
// If a third party library you want to use does not support types, then you can intall community supported types from `@types`
// lots of intellisense because we `yarn add @types/lodash`
const num = _.sum([5, 6]);
console.log("num is", num);
// implicit typing: when you don't provide a type but you provide a value
let thisIsActuallyANumber = 23;
// use 'any' when you want to stop the TSC from checking type. It pretty much becomes JS.
// you should try to avoid using `any` cause otherwise why use TypeScript
let anyValue = 7;
anyValue = "hello";
// if no value or type is provided, TSC will use 'any'
let itWillUseAnyAsWell;
itWillUseAnyAsWell = 5;
itWillUseAnyAsWell = "now it's a sting";
// explicit typing
let thisWillAlwaysBeANumber = 7;
// thisWillAlwaysBeANumber = "string now?"; // <= compiler error
// TIP: if you have an implicit type (value provided), then ther is no need to provide type
let reduntantTyping = 44;
// You can use all the types from JS
