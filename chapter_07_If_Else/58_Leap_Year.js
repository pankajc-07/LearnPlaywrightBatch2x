// Leap Year Check

// Rules:
// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

// Practice Example 1: Check year 1900 (divisible by 100 but not 400)
let year1 = 1900;

if ((year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0) {
    console.log(year1 + " is a Leap Year");
} else {
    console.log(year1 + " is NOT a Leap Year");
}

// Practice Example 2: Check year 2000 (divisible by 400)
let year2 = 2000;

if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
    console.log(year2 + " is a Leap Year");
} else {
    console.log(year2 + " is NOT a Leap Year");
}

// Practice Example 3: Check year 2023 (not divisible by 4)
let year3 = 2023;

if ((year3 % 4 === 0 && year3 % 100 !== 0) || year3 % 400 === 0) {
    console.log(year3 + " is a Leap Year");
} else {
    console.log(year3 + " is NOT a Leap Year");
}