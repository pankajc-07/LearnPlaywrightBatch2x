//let - block scope
let a = 10; //Globle scope

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;

console.log("Retry count attempt: " + retryCount);

//let retryCount = 5; // SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

// console.log(executionTime); // ReferenceError: executionTime is not defined

// {} - Block 
// if(){} 
// funcion name(){}

// let = loyal
// var = varirable / triator

let name = "pending";
name = "done";
console.log(name);