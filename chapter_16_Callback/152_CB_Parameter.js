function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing!");
});

greetTester("Dev", () => {
    console.log("Let's start testing!");
});
console.log("*******************************************************");

// // Callback with Parameters

function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + " → " + result);
});
console.log("*******************************************************");

// // Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});

console.log("Total bugs: " + bugs.length);
console.log("*******************************************************");

// Practice Examples
console.log("Example 01");
function result(testResult, callback) {
    let status = "pass";
    callback(testResult, status);
}

result("Login page", function (name, result) {
    console.log(name + " => " + result);

})
console.log("*******************************************************");

console.log("Example 02");
/*
Simple Array Filter (Custom Logic)
This replicates how methods like Array.prototype.filter work under the hood by passing a dynamic condition via a callback.
*/
// Callback for Filtering Data

function filterScores(scores, checkCondition) {
    let passedScores = [];
    for (let score of scores) {
        if (checkCondition(score)) {
            passedScores.push(score);
        }
    }
    return passedScores;
}

let testScores = [45, 82, 90, 61, 55];

// Pass a callback that checks if a score is a passing grade
let passing = filterScores(testScores, function (score) {
    return score >= 60;
});

console.log("Passed Scores:", passing);
// Output: Passed Scores: [82, 90, 61]
console.log("*******************************************************");

console.log("Example 03");
/*
Simulating an API Fetch (Asynchronous)
Callbacks are crucial for handling actions that take time, like fetching data from a server.
*/
// Callback for Asynchronous Data Fetching

function fetchUserData(userId, callback) {
    console.log("Fetching data for User ID: " + userId + "...");

    // Simulate a 1.5-second network delay
    setTimeout(function () {
        let mockUser = { id: userId, username: "DevJay", role: "Admin" };
        callback(mockUser);
    }, 1500);
}

fetchUserData(101, function (user) {
    console.log("Fetch Complete! Welcome back, " + user.username + " (" + user.role + ").");
});
console.log("*******************************************************");

//Self practice
// function fetchData(userID, callback) {
//     console.log("Fetching data for userID : " + userID + "..........");
//     setTimeout(function () {
//         let user = { id: userID, username: "DevJay", role: "Admin" };
//         callback(user);
//     }, 2000);
// }

// fetchData(100, (user) => {
//     console.log(user.role + "||" + user.username);

// })


console.log("*******************************************************");

console.log("Example 04");
/*
Text Transformer (Data Processing)
Using a callback to dynamically change how a piece of string data is formatted before printing it.
*/
// Callback for Data Transformation

function formatMessage(message, transformer) {
    let result = transformer(message);
    console.log("Formatted: " + result);
}

// Example A: Transform to Loud/Uppercase shout
formatMessage("hello world", function (text) {
    return text.toUpperCase() + "!!!";
});
// Output: Formatted: HELLO WORLD!!!

// Example B: Transform to a URL slug
formatMessage("Callback Functions Are Awesome", function (text) {
    return text.toLowerCase().split(" ").join("-");
});
// Output: Formatted: callback-functions-are-awesome
console.log("*******************************************************");

// Self practice
// function formated(msg, trans) {
//     let result = trans(msg);
//     console.log(result);
// }

// formated("hi how are you", (msg) => {
//     return msg.toUpperCase();
// })

// formated("where are you", (msg) => {
//     return msg.toUpperCase().split(" ").join("-")
// })
console.log("*******************************************************");

console.log("Example 05");
/*
Custom Button Click Notification (Event Handling)
This demonstrates how browser event listeners (like .addEventListener('click', callback)) function fundamentally.
*/
// Callback for Event Handling Simulation

function simulateButtonClick(buttonName, onClickCallback) {
    console.log("User hovered over the " + buttonName + " button...");
    console.log("User clicked the " + buttonName + " button!");

    let clickEventDetails = { timestamp: Date.now(), target: buttonName };
    onClickCallback(clickEventDetails);
}

simulateButtonClick("Submit Order", function (event) {
    console.log("Triggering checkout logic at timestamp: " + event.timestamp);
});
console.log("*******************************************************");

console.log("Example 05");
/*
Math Operation Pipeline (Strategy Pattern)
Instead of writing separate functions for adding, subtracting, or multiplying, you pass the mathematical strategy as a callback.
*/
// Callback for Math Operations

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

// 1. Pass an addition callback
let sum = calculate(10, 5, function (a, b) {
    return a + b;
});
console.log("Addition Result: " + sum); // Output: 15

// 2. Pass a multiplication callback
let product = calculate(10, 5, function (a, b) {
    return a * b;
});
console.log("Multiplication Result: " + product); // Output: 50
console.log("*******************************************************");

//Self practice
// function calculate(num1, num2, operator) {
//     return operator(num1, num2);
// }

// let add = calculate(9, 2, (a, b) => {
//     return a + b;
// })
// console.log(add);


// let mul = calculate(2, 7, (a, b) => {
//     return a * b;
// })
// console.log(mul);
