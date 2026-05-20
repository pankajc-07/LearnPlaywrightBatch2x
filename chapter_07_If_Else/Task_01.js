// Task 01
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
console.log("**************************************");

// Task 02
let marks = 90;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks > 80) {
    console.log("Grade B");
} else if (marks > 70) {
    console.log("Grade C");
} else if (marks > 60) {
    console.log("Grade D");
} else {
    console.log("FAIL");
}
console.log("**************************************");

// Task 03
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}