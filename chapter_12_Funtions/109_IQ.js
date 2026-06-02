// Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

getStatus(200);
getStatus(404);
getStatus(500);

const a = getStatus(200);
console.log(a);
console.log("*****************************************");

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");
console.log(result);// Without return we can not assign, it will give as undefined
console.log("*****************************************");
/*
JavaScript hoists function declarations, allowing greet("Alice") to run before its definition
and return a dynamic string using a template literal.
*/
greet("Alice");

function greet(name) {
    return `Hello, ${name}!`;
}
console.log("*****************************************");

/*
const declarations are hoisted but not initialized (temporal dead zone),
so calling sayHi("Bob") before the line that defines it throws a ReferenceError
*/
sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
};

