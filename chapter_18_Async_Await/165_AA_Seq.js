// When Step 2 depends on Step 1's result, you MUST run them sequentially.

// Ste1 - Step 2

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000);
    })
}

async function seqTest() {

    console.log("Starting of the Test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

seqTest();
console.log("**********************************************");
console.log("Example 01");

function apiCall01(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 OK")
        }, 1000);
    })
}

async function seq() {

    console.log("Test start here");

    let r1 = await apiCall01("Login page");
    console.log(r1);

    let r2 = await apiCall01("Enter datails");
    console.log(r2);

    let r3 = await apiCall01("Click on login button");
    console.log(r3);

    let r4 = await apiCall01("Admin page");
    console.log(r4);

    console.log("Test completed here");
}

seq();
console.log("**********************************************");
console.log("Example 02");

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000);
    })
}

async function sequence() {
    console.log("Start");

    let r1 = await apiCall("1st page");
    console.log(r1);

    let r2 = await apiCall("2nd page");
    console.log(r2);

    console.log("Tested completed sucessfully!");
}

sequence();

