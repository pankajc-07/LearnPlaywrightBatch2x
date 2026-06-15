function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
    // return Promise.resolve("Browser opened!")
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
    // return Promise.resolve("Login page loaded")
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

// openBrowser()
//     .then(function (msg) {
//         console.log("Step 1", msg);
//         return goToLogin();
//     }).then(function (msg) {
//         console.log("Step 2 :", msg);
//         return enterCredentials();
//     }).then(function (msg) {
//         console.log("Step 3 :", msg);
//         return clickLogin();
//     }).then(function (msg) {
//         console.log("Step 4 :", msg);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     }).finally(function () {
//         console.log("Done execution!");
//     });


async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1:", msg1);

    let msg2 = await goToLogin();
    console.log("Step 2:", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3:", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4:", msg4);
}
runTheE2E();
console.log("**********************************************");
console.log("Example 01");

function fn01() {
    return Promise.resolve("Signup Page!")
}

function fn02() {
    return Promise.resolve("Login page");
}

function fn03() {
    return Promise.resolve("Main page")
}

function fn04() {
    return Promise.resolve("Registration page")
}

async function e2eFlow(params) {
    let msg1 = await fn01();
    console.log("Step 01: ", msg1);

    let msg2 = await fn02();
    console.log("Step 02: ", msg2);

    let msg3 = await fn03();
    console.log("Step 03: ", msg3);

    let msg4 = await fn04();
    console.log("Step 04: ", msg4);
}

e2eFlow();
console.log("**********************************************");
console.log("Example 02");

function funct01() {
    return Promise.resolve("Login page");
}

function funct02() {
    return Promise.resolve("Enter credentials");
}

function funct03() {
    return Promise.resolve("Click on Login button");
}

function funct04() {
    return Promise.resolve("Main page displayed")
}

async function completeFlow() {
    let result01 = await funct01();
    console.log("Step01: ", result01);

    let result02 = await funct02();
    console.log("Step02: ", result02);

    let result03 = await funct03();
    console.log("Step03: ", result03);

    let result04 = await funct04();
    console.log("Step04: ", result04);
}

completeFlow();





