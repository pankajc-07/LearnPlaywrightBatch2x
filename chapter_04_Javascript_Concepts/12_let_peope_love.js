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

// Example of Block
// {} - Block 
// if(){}  - Block 
// funcion name(){} - Block 

// let = loyal
// var = varirable / triator

let name = "pending";
name = "done";
console.log(name);

console.log("***********************************")

let p = "100";
p = "200";
console.log(p);

function function01() {
    let p = "300";
    console.log(p);

    if (true) {
        let p = "400";
        console.log("This is from if block inside the function : " + p);
    }

    console.log("This is outside if block inside the function : " + p);
}
p = "500";
console.log(p);

function01();