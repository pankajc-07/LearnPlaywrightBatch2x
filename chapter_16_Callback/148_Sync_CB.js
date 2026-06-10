let testResults = ["Pass", "Fail", "Pass", "Skip"];

testResults.forEach(function (result, index) {
    console.log("Test " + index + "=> " + result);
})

// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1.
console.log("*******************************************************");

// Practice Examples
console.log("Example 01");
let result = ["PASS", "PASS", "FAIL", "SKIP", "PASS"];

result.forEach(function (result, index) {
    console.log("Test " + index + " => " + result);
})

result.forEach((result, index) => {
    console.log("Test " + index + " => " + result);
})







