// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// app.vwo.com -> viewer, editor or admin -> 

let isLoggedIn = false;
let role = "admin";

if (isLoggedIn) {
    if (role === "admin") {
        console.log("admin can do all the things: " + role);
    } else if (role === "editor") {
        console.log("Welcome Editor — Edit access granted: " + role);
    } else if (role === "viewer") {
        console.log("Welcome Viewer — Read-only access: " + role);
    } else {
        console.log("No idea you may be a guest! role");
    }
} else {
    console.log("You are not logged in!");
}
console.log("**********************************");

// Practice Example
console.log("Practice Example 01");
let exam = true;
let grade = "A";

if (exam) {
    if (grade === "A") {
        console.log("Congratulations! You have been passed with grade: " + grade);
    } else if (grade === "B") {
        console.log("Congratulations! You have been passed with grade: " + grade);
    } else if (grade === "C") {
        console.log("Congratulations! You have been passed with grade: " + grade);
    } else {
        console.log("Congratulations! You have been passed with grade: " + grade);
    }
} else {
    console.log("Sorry! You have not been passed.");
}
console.log("**********************************");

console.log("Practice Example 02");
let isInternetAvailable = true;
let isWifiConnected = false;

if (isInternetAvailable) {
    if (isWifiConnected) {
        console.log("You are connected to the internet via Wi-Fi.");
    } else {
        console.log("You are connected to the internet via mobile data.");
    }
} else {
    console.log("Sorry! You are not connected to the internet.");
}
console.log("**********************************");

console.log("Practice Example 03");
let isCarAvailable = true;
let dist = 700;

if (isCarAvailable) {
    if (dist > 100 && dist <= 200) {
        console.log("You can go to your destination by car.");
    } else if (dist > 200 && dist <= 500) {
        console.log("You can go to your destination by car but it may take longer time.");
    } else if (dist > 500) {
        console.log("You can go to your destination by car but it may take much longer time.");
    } else {
        console.log("You can go to your destination by car and it will take less time.");
    }
} else {
    console.log("Sorry! You cannot go to your destination by car.");
}
console.log("**********************************");