// 1
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
// 2

function Is_Valid(A, B) {
  return A < 10 && A > B;
}

console.log(Is_Valid(5, 3));

// 3

function Check(A, B) {
  return A % 10 === 0 || B % 10 === 0;
}

console.log(Check(12, 20));

// 4

function First_Digit(N) {
  return parseInt(N.toString()[0]);
}

console.log(First_Digit(4567)); // Output: 4

// 5

function Last_Digit(N) {
  return N % 10;
}

console.log(Last_Digit(4567));

// 6
function Find_the_remainder(A, B) {
  return B % A;
}
console.log("Remainder of two numberis =", Find_the_remainder(2, 9));

// 7
function Multiply_two_number(A, B) {
  return A * B;
}
console.log("multiple of two number is =", Multiply_two_number(2, 9));
// 8
function total(A, B, C) {
  let total = A + B + C;

  return total;
}
function avg(a, b, c) {
  return total(a, b, c) / 3;
}
console.log("Total is =", total(5, 10, 15));
console.log("average is =", avg(5, 10, 15));

// DAY1-Interview Question _______________________________________

// DAY1
// Difference between “ == “ and “ === “ operators.
//  the main difference between == and ==== is that == is used to check the value equality of two number of variable whereas === is used to check the value and their data type also.
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

// What are the differences between var, let and const?
// var is function scoped and let, const are block scoped.
// var can be hoisted and updated and re-declared, let and const can't be re-declared.
// let and const are not hoisted.
// const can't be updated.
// const is used when we want to keep the value constant.
// var is used when we want to re-declare the variable.
// let is used when we want to update the value of the variable.

var c = 10;
var c = 20;
console.log("var value = " + c);
let d = 10;
d = 20;
console.log("let value= " + d);

// What is execution context
// What is creation phase and execution phase.
// What is hoisting?
// Difference between undefined vs not defined vs NaN

// ______________________
// How many operators do we have in JS ?
//Arithmatic operator + - * / % ++ --
//Assignment operator = += -= *= /= %= **=
//Comparison operator == === != !== > < >= <=
//Logical operator && || !
//Bitwise operator & | ^ ~ << >> >>>
// ______________

// Explain Local Scope, Block Scope,

// Functional Scope and Scope Chain in javascript
