// Higher-Order Functions
// A function that takes a function as argument or returns a function.

/*
runWithLoggin is a higher-order function that accepts another function as an argument
(callback), executes it, and returns the result, demonstrating how functions can be passed
around and invoked dynamically in JavaScript.
*/

function runWithLoggin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");

//To print results we have to do following

// console.log(runWithLoggin(loginTest, "Login Test"));
// console.log(runWithLoggin(loginTestFAILED, "Dashboard Failed Test"));
console.log("**************************************************");

function heigherOrder(test, name) {
    let result = test();
    return result;
}

function lowerOrder01() {
    return "PASS";
}

function lowerOrder02() {
    return "FAIL";
}

console.log(heigherOrder(lowerOrder01, "Test 01"));

