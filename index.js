"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union literals
let number = 7;
number = "seven";
console.log(number);
//narrowing means to lesser the no of types
let num1, num2;
function add(num1, num2) {
    if (typeof num1 === "number") {
        return num1 + num2;
    }
    else {
        return num1 + num2;
    }
}
add(5, 8);
console.log(add("hello,", 8));
// let myAge :number| String = 24;
//   myAge = "Dont Know";
//   console.log(myAge);
//   console.log(myAge.toString());//common to both types
//   console.log(myAge.toLowerCase());//without narrowing can be called
