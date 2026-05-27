const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r);

// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}

// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));
console.log("**************************************");

// Practice Examples
console.log("Example 01");

function fun01(name) {
    return `"Hi", ${name}`;
}

const exp01 = function (name) {
    return `"Heloo",${name}`;
}

console.log(fun01("Pankaj"));
console.log(exp01("Pankaj"));
console.log("**************************************");

console.log("Example 02");

