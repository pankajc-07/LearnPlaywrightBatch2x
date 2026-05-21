let day = 1;
// 1 - mon, 2. - tue

switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        // let a = 10;
        // let b = 30;
        // console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}
console.log("****************************************************");

// Practice Example
console.log("Practice Example 01");
let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("No idea which month it is");
}
console.log("****************************************************");

console.log("Practice Example 02");
let trafficLight = "Green";

switch (trafficLight) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Prepare to stop");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}
console.log("****************************************************");

console.log("Practice Example 03");
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}
console.log("****************************************************");

console.log("Practice Example 04");
let speed = 100;

switch (speed) {
    case 50:
        console.log("Low speed");
        break;
    case 100:
        console.log("High speed");
        break;
    case 150:
        console.log("Very high Speed");
        break;
    default:
        console.log("Speed is not known");
}
console.log("****************************************************");

console.log("Practice Example 05");
let user = "Admin";

switch (user) {
    case "Admin":
        console.log("This is " + user + " user")
        break;
    case "Manger":
        console.log("This is " + user + " user")
        break;
    case "Leader":
        console.log("This is " + user + " user")
        break;
    case "Rater":
        console.log("This is " + user + " user");
        break;
    default:
        console.log("This is " + user + " user is not valid")
}


