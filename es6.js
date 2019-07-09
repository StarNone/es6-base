const Tom = {
    name: "Tom Cat",
    age: 18,
    family: {
        mother: "Tom ma",
        father: "Tom fa",
        brother: "Tom bro"
    }
}
const name = "用户名";
let {name: Tname,age} = Tom;
console.log(Tname);
console.log(age);
const arr = ["one","two","three"];
const [one,two,three,four = "我是第四项"] = arr;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
let num1 = 1;
let num2 = 2;
[num2,num1] = [num1,num2];
console.log(num1);
console.log(num2);