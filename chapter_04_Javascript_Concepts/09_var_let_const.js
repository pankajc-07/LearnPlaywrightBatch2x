var v = 10;
let l = 100;
const c = 1000;

var browser = "Chrome";
var browser = "Firefox"; // redeclaration of var is allowed
browser = "Edge";  // reassigning var is allowed

console.log(browser);

// for, functions
var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log('Hi from the function');
}

say();
say();
say();
say();