// Primitive vs Reference Types
let a = 10;
let b = a;
b = 99;
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")

let a01 = 100
let b01 = a01;
b01 = 200;
console.log(b01);
console.log(a01);

if (a01 === b01) {
    console.log("Call by refrence and copied by refrence");
} else {
    console.log("Call by Premitive type and does not copy");
}


let obj01 = {
    val: 300
}
let obj02 = obj01;
console.log(obj01);
console.log(obj02);

if (obj01 === obj02) {
    console.log("Call by refrence and copied by refrence");
} else {
    console.log("Call by Premitive type and does not copy");
}
