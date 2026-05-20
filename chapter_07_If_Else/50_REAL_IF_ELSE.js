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