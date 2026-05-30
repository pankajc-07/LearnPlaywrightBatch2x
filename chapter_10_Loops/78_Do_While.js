let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);
console.log("***************************************");

//Practice Examples

console.log("Example 01");

let num = 0;
do {
    console.log("Number is = " + num)
    num++;
} while (num <= 5);
console.log("***************************************");

console.log("Example 02");

let grade = 1;
do {
    console.log("This is Grade Example");
    console.log("And the Grade is = " + grade);
    grade++;
} while (grade < 0);
console.log("***************************************");

console.log("Example 03");

let loop = 0;
do {
    console.log("This code will run : " + loop)
    loop++
} while (loop <= 5);
console.log("***************************************");

console.log("Example 04");

let fuel = 0;

do {
    console.log("Attempting to start the engine...");
    // This code runs once before checking the condition below
} while (fuel > 0);
console.log("Engine failed. Out of fuel.");
console.log("***************************************");

console.log("Example 05");

let number = 2;

do {
    console.log("Current number:", number);
    number = number * 3; // Triple the number each time
} while (number <= 50);

console.log("Stopped because the next number is over 50.");
console.log("***************************************");

console.log("Example 06");

let timer = 3;

do {
    console.log("Seconds left:", timer);
    timer--; // Decrease the timer by 1
} while (timer > 0);

console.log("Time's up!");
console.log("***************************************");

console.log("Example 07");

let correctPIN = "1234";
let enteredPIN = "";
let attempts = 0;

do {
    attempts++;
    console.log("Attempt " + attempts + ": User is typing their PIN...");

    // Simulating the user entering the PIN on attempt 3
    if (attempts === 3) {
        enteredPIN = "1234";
    } else {
        enteredPIN = "9999"; // Wrong PIN for the first two tries
    }

} while (enteredPIN !== correctPIN);

console.log("Access granted after " + attempts + " attempts!");
console.log("***************************************");

console.log("Example 08");
let num08 = 3;
do {
    console.log("The number is = " + num08);
    num08++
} while (num08 < 1);
console.log("***************************************");

console.log("Example 09");
let num09 = 1;
let sum09 = 0;
do {
    sum09 = sum09 + num09;
    console.log("Sum is = " + sum09);
    num09++;
} while (num09 <= 7);
console.log("Finaal value of sum is = " + sum09);

