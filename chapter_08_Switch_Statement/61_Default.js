// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 10;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
        break;
    case 1:
        console.log("Monday — Sprint Planning");
        break;
    case 2:
        console.log("Tuesday — Development");
        break;
    case 3:
        console.log("Wednesday — Code Review")
        break;
    case 4:
        console.log("Thursday — Testing");
        break;
    case 5:
        console.log("Friday — Deployment & Retro");
        break;
    case 6:
        console.log("Saturday — Rest Day");
        break;
    default:
        console.log("Invalid day value");
}
console.log("*********************************************");

// Practice Examples
console.log("Example 01"); // without default keyword

let temp = 40;

switch (temp) {

    case 45:
    case 40:
        console.log("Very hot");
        break;
    case 30:
        console.log("Warm");
        break;
}
console.log("*********************************************");

console.log("Example 02");
let month = 13; // without default keyword

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Month " + month + " => This is 1st quarter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Month " + month + " => This is 2nd quarter");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Month " + month + " => This is 3rd quarter");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Month " + month + " => This is 4th quarter");
        break;
}
console.log("*********************************************");

console.log("Example 03"); // with default keyword

let month01 = "Oct";

switch (month01) {
    case "March":
    case "April":
    case "May":
        console.log(month01 + " is a month of Summer");
        break;
    case "June":
    case "Jully":
    case "Aug":
    case "Sept":
        console.log(month01 + " is a month of Rain");
        break;
    case "Oct":
    case "Nov":
    case "Dec":
    case "Jan":
    case "Feb":
        console.log(month01 + " is a month of Winter");
        break;
    default:
        console.log(month01 + " Incorrect value");
}