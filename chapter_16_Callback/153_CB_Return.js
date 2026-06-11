function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);

function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!");
            });
        });
    });
});
console.log("*******************************************************");

// Practice Examples
console.log("Example 01");
/*
1. String Transformer (Uppercase/Lowercase)
This example shows how to pass a callback that manipulates strings instead of numbers.
*/
// Callback with return
function transformText(text, transformer) {
    return transformer(text);
}

let shouted = transformText("hello world", function (str) {
    return str.toUpperCase();
});

console.log(shouted); // Output: "HELLO WORLD"
console.log("*******************************************************");

function transform(msg, trans) {
    return trans(msg);
}

let example = transform("hi good morning", function (str) {
    return str.toUpperCase();
})
console.log(example);
console.log("*******************************************************");

console.log("Example 02");
/*
2. Array Multiplier
This example passes a number and an array, using the callback to determine
how to modify the number based on the array's length or first element.
*/
// Callback with return
function processNumber(num, modifier) {
    return modifier(num);
}

let doubled = processNumber(25, function (n) {
    return n * 2;
});

console.log(doubled); // Output: 50
console.log("*******************************************************");

console.log("Example 03");
/*
3. Boolean Condition Checker (Is Even?)
This example uses a callback to evaluate a condition and return a boolean (true or false).
*/
// Callback with return
function checkCondition(value, predicate) {
    return predicate(value);
}

let isEven = checkCondition(8, function (num) {
    return num % 2 === 0;
});

console.log(isEven); // Output: true
console.log("*******************************************************");

console.log("Example 04");
/*
4. Custom Object Formatter
This example demonstrates passing multiple pieces of data into a callback to construct
and return a formatted string.
*/
// Callback with return
function formatUser(firstName, lastName, formatter) {
    return formatter(firstName, lastName);
}

let fullName = formatUser("Jane", "Doe", function (first, last) {
    return `${last}, ${first}`;
});

console.log(fullName); // Output: "Doe, Jane"
console.log("*******************************************************");

console.log("Example 05");
/*
5. Math Power Calculator
Back to a math-based example, this one uses a callback to handle exponents/power calculations.
*/
// Callback with return
function raiseToPower(base, exponent, powerLogic) {
    return powerLogic(base, exponent);
}

let result = raiseToPower(2, 3, function (b, e) {
    return Math.pow(b, e);
});

console.log(result); // Output: 8
console.log("*******************************************************");
