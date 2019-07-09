"use strict";

var Tom = {
  name: "Tom Cat",
  age: 18,
  family: {
    mother: "Tom ma",
    father: "Tom fa",
    brother: "Tom bro"
  }
};
var name = "用户名";
var Tname = Tom.name,
    age = Tom.age;
console.log(Tname);
console.log(age);
var arr = ["one", "two", "three"];
var one = arr[0],
    two = arr[1],
    three = arr[2],
    _arr$ = arr[3],
    four = _arr$ === void 0 ? "我是第四项" : _arr$;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
var num1 = 1;
var num2 = 2;
var _ref = [num1, num2];
num2 = _ref[0];
num1 = _ref[1];
console.log(num1);
console.log(num2);
const iterable = ['mine','mani','mo'];
for (const value of iterable) {
  console.log(value);
}