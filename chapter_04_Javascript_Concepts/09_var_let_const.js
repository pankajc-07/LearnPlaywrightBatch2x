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


var arr = ["a", "b", "c"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("Loop counter leaked outside:", i);
console.log("*****************************")

var name = "pankaj";
var name = "pankaj01"; // redeclaration of var is allowed
name = "pankaj02"; // reassigning var is allowed
console.log(name);
console.log("*****************************")

let name1 = "pending";
//let name1 = "done"; // SyntaxError: Identifier 'name1' has already been declared
name1 = "done"
let name2 = "status";
console.log(name1 + " " + name2);
console.log(name1 + name2);
console.log("*****************************")

const URL = "https://app.thetestingacademy.com";
const URL1 = "https://master.thetestingacademy.com";
const URL2 = "https://staging.thetestingacademy.com";

console.log(URL);
console.log(URL1);
console.log(URL2);
console.log("*****************************")

