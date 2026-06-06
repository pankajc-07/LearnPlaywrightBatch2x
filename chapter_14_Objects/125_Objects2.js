// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };
console.log("********************************************");

let a = { status: "pass" };
// console.log(a);
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

let b = a;
console.log(b.status);
console.log(a.status);

b.status = "fail";
console.log(a.status);
console.log(b.status);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);
if (c === d) {
    console.log("true");
} else {
    console.log("false");
}
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
let a01 = { result: 'PASS' };
console.log(a01);
console.log(a01.result);

let b01 = a01;
console.log(b01.result);
console.log(a01.result);

console.log(b01);

b01.result = "NA";
console.log(b01.result);
console.log(a01.result);

if (a01 === b01) {
    console.log("Pass the test");
} else {
    console.log("Fail the test");
}
console.log("*******************************************************");

console.log("Example 02")
let a02 = { result: "PASS" }
let b02 = { result: "PASS" }

console.log(a02);
console.log(b02);

if (a02 === b02) {
    console.log("Ture");
} else {
    console.log("False");
}

let c02 = a02;

console.log(a02);
console.log(c02);

if (c02 === a02) {
    console.log("Ture");
} else {
    console.log("False");
}

c02.result = "sanity";
console.log(c02);
console.log(a02);

console.log(c02.result);
console.log(a02.result);

if (c02 === a02) {
    console.log("Ture");
} else {
    console.log("False");
}