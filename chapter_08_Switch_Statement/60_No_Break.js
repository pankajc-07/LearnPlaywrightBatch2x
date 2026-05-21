// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}
console.log("*********************************************");

// Practice Examples
console.log("Example 01");

let month = 1;

switch (month) {
    case 1:
        console.log("Jan");
    case 2:
        console.log("Feb");
    case 3:
        console.log("March");
    case 4:
        console.log("April");
    default:
        console.log("Month is after April");
}
console.log("*********************************************");

console.log("Example 02");
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
    case "B":
        console.log("Good");
    case "C":
        console.log("Average");
    case "D":
        console.log("Below Average");
    case "F":
        console.log("Fail");
    default:
        console.log("Invalid grade");
}
console.log("****************************************************");

console.log("Example 03");
let marks = 70;

switch (marks) {
    case 40:
        console.log("Just PASS");
    case 60:
        console.log("PASS in 1st class");
    case 70:
        console.log("Near distinction");
    case 80:
        console.log("PASS in distinction");
        break;
    case 90:
        console.log("Best score");
    default:
        console.log("FAIL the exam");
}
console.log("****************************************************");


