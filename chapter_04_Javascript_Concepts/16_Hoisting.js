// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;             <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Pankaj";
console.log(a);
console.log("*********************************");

console.log(p);
var p = "Pankaj01";
var p = "Pankaj02"
p = "Pankaj03";
console.log(p);
console.log("*********************************");

//ReferenceError: Cannot access 'q' before initialization
/*
console.log(q);
let q = "Name"
console.log(q);
*/

//ReferenceError: Cannot access 'r' before initialization
/*
console.log(r);
const r = "Google.com";
console.log(r);
*/