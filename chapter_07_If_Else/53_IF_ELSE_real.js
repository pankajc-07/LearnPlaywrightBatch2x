let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

// Logical operator + if-else statement

if ((username === "Dev" && password === "secure123") && isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allowed to enter");
}
console.log("**********************************");

// Practice Example
console.log("Practice Example 01");
let isRaining = true;
let hasUmbrella = true;

if (isRaining && hasUmbrella) {
    console.log("You can go outside with an umbrella.");
} else
    console.log("You can go outside but you may get wet.");
console.log("**********************************");

console.log("Practice Example 02");
let isName = "Pankaj1";
let isGender = "Male";
let haveBike = true;

if ((isName === "Pankaj" && isGender === "Male") && haveBike) {
    console.log("You can go for a ride.");
} else {
    console.log("You cannot go for a ride, please check your name: " + isName +
        " and gender: " + isGender +
        " and bike availability: " + haveBike);
}
console.log("**********************************");

console.log("Practice Example 03");
let isLoggedIn = true;
let role = "Admin";
let isSignedUp = true;

if (isLoggedIn) {
    if (isSignedUp) {
        if (role === "Admin") {
            console.log("You have access to the admin panel.");
        } else {
            console.log("You are logged in but do not have admin privileges.");
        }
    } else {
        console.log("Please complete your sign-up process.");
    }
} else {
    console.log("Please log in to access your account.");
}
console.log("**********************************");
