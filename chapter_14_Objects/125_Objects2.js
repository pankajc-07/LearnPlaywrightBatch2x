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

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
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


