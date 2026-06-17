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
console.log("**********************************************");

console.log("Example 03");
/*
Example 1: The User Profile Fetcher (Sequential Dependency)
In this example, each step depends on the previous one.
You can't fetch the orders until you have the user ID, and you can't get the total until you have the orders.
*/
function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 101, name: "Alice" }), 1000));
}

function fetchOrders(userId) {
    return new Promise(resolve => setTimeout(() => resolve(["Order_A", "Order_B"]), 1500));
}

function calculateTotal(orders) {
    return new Promise(resolve => setTimeout(() => resolve("$150.00"), 500));
}

async function runProfileTest() {
    console.log("Fetching user profile data...");
    let start = Date.now();

    // Practice writing the sequential await statements here:
    let user = await fetchUser();
    console.log("User fetched:", user.name);

    let orders = await fetchOrders(user.id);
    console.log("Orders fetched:", orders);

    let total = await calculateTotal(orders);
    console.log("Total calculated:", total);

    console.log("Total Execution Time: ~" + (Date.now() - start) + "ms");
}

runProfileTest();
console.log("**********************************************");

console.log("Example 04");
/*
Example 2: The E-Commerce Checkout (With Error Handling)
Real APIs fail. This example introduces a random chance of failure so you can practice using try...catch blocks with async/await.
*/
function validateCart() {
    return new Promise(resolve => setTimeout(() => resolve("Cart Validated"), 1000));
}

function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccessful = Math.random() > 0.3; // 70% chance to succeed
            isSuccessful ? resolve("Payment Successful") : reject("Payment Failed: Insufficient Funds");
        }, 2000);
    });
}

async function runCheckoutTest() {
    console.log("Starting checkout process...");

    // Practice: Wrap this in a try/catch block to handle potential rejection
    try {
        let cartStatus = await validateCart();
        console.log(cartStatus);

        let paymentStatus = await processPayment();
        console.log(paymentStatus);

        console.log("Order Placed Successfully!");
    } catch (error) {
        console.error("Checkout Error:", error);
    }
}

runCheckoutTest();
console.log("**********************************************");

console.log("Example 05");
/*
Example 3: The Smart Home Boot Sequence (Passing Multiple Arguments)
Your original code tried to pass two arguments to resolve(name, "200 Ok").+
In JavaScript, resolve() only accepts one argument. If you need to pass multiple pieces of data, you must pass them as an object or an array.
*/

function bootDevice(deviceName) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Fixing the multiple-argument issue by returning an object
            resolve({ device: deviceName, status: "Online", temp: "22°C" });
        }, 1200);
    });
}

async function runHomeTest() {
    console.log("Booting Smart Home Systems...");

    let thermostat = await bootDevice("Thermostat");
    console.log(`${thermostat.device} is ${thermostat.status}. Current temp: ${thermostat.temp}`);

    let security = await bootDevice("Security Cameras");
    console.log(`${security.device} is ${security.status}.`);
}

runHomeTest();
console.log("**********************************************");

console.log("Example 06");
/*
Example 4: The File Uploader (Simulating Progress Updates)
This example simulates a multi-step file upload process where each chunk or phase takes a bit of time.
*/
function uploadChunk(chunkNumber) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Chunk #${chunkNumber} uploaded successfully.`);
        }, 800);
    });
}

async function runUploadTest() {
    console.log("Starting file upload...");
    let start = Date.now();

    // Practice: Use a loop or individual awaits to upload 3 chunks sequentially
    for (let i = 1; i <= 3; i++) {
        let result = await uploadChunk(i);
        console.log(result);
    }

    console.log("Upload complete! Time taken: ~" + (Date.now() - start) + "ms");
}

runUploadTest();
console.log("**********************************************");

console.log("Example 07");
/*
Example 5: The Analytics Dashboard (Sequential vs. Parallel Challenge)
In your original code, Dashboard didn't depend on Login to finish, yet it waited for it.
If tasks are independent, waiting sequentially wastes time.
Here is a scenario where you can practice changing sequential code into parallel code using Promise.all.
*/
function fetchWeather() {
    return new Promise(resolve => setTimeout(() => resolve("Weather: Sunny"), 1500));
}

function fetchNews() {
    return new Promise(resolve => setTimeout(() => resolve("News: Tech Stock Surge"), 1500));
}

function fetchStocks() {
    return new Promise(resolve => setTimeout(() => resolve("Stocks: NASDAQ Up"), 1500));
}

async function runDashboardTest() {
    console.log("Loading Dashboard Widget Data...");
    let start = Date.now();

    // SLOW WAY (Sequential ~4500ms):
    // let weather = await fetchWeather();
    // let news = await fetchNews();
    // let stocks = await fetchStocks();

    // FAST WAY (Parallel ~1500ms): Practice using Promise.all
    let results = await Promise.all([fetchWeather(), fetchNews(), fetchStocks()]);

    console.log(results[0]); // Weather
    console.log(results[1]); // News
    console.log(results[2]); // Stocks

    console.log("Dashboard loaded in: ~" + (Date.now() - start) + "ms");
}

runDashboardTest();
