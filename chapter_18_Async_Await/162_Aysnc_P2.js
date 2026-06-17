function getToken() {
    return Promise.resolve("abc123");
}

// Playwright
// page.goto() => Promise ()
// await page.goto();

async function run() {
    let token = await getToken();
    console.log(token);
}

run();
console.log("**********************************************");
console.log("Example 01");

function passValue() {
    return Promise.resolve("This returns the value");
}

async function test01() {
    let result = await passValue();
    console.log(result);
}

test01();
console.log("**********************************************");
console.log("Example 02");

function passAPI() {
    return Promise.resolve("200 PASS");
}

async function test02() {
    let result = await passAPI();
    console.log(result);
}

test02();
console.log("**********************************************");
console.log("Example 03");

function passEntry() {
    return Promise.resolve("API: 200 pass")
}

async function test03() {
    let result = await passEntry();
    console.log(result);
}

test03();
console.log("**********************************************");

console.log("Example 04");
/*
Example 1: The Basic Variation (Object Return)
Instead of returning a simple string, this practice example returns a JavaScript object. This mimics how data is usually passed around in web apps.

Your Goal: Write an async function to await and log the user profile object.
*/
function getUserProfile() {
    return Promise.resolve({ username: "coder123", status: "active" });
}

// Your turn: Write the async function 'showProfile' here
async function showProfile() {
    let profile = await getUserProfile();
    console.log(profile); // Should log the object
}

showProfile();
console.log("**********************************************");

console.log("Example 05");
/*
Example 2: Simulating Network Delay (setTimeout)
In real life, APIs don't respond instantly like Promise.resolve(). They take time. This example introduces a 1.5-second delay to simulate a real server response.

Your Goal: Await the delayed message and log it. Notice how the console pauses for a moment before printing the result.
*/
function fetchServerStatus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server is running smoothly.");
        }, 1500); // 1.5 second delay
    });
}

// Your turn: Write the async function 'checkStatus' here
async function checkStatus() {
    console.log("Checking server...");
    let status = await fetchServerStatus();
    console.log(status);
}

checkStatus();
console.log("**********************************************");

console.log("Example 06");
/*
Example 3: Sequential Dependency (Chaining)
Often, you need the result of the first async function to call a second async function. For example, you need a User ID first, and then you use that ID to fetch their specific orders.
 
Your Goal: Await the first function, extract the ID, pass it into the second function, and log the final result.
*/
function getUserId() {
    return Promise.resolve(99);
}

function getUserOrders(id) {
    return Promise.resolve([`Order #1 for User ${id}`, `Order #2 for User ${id}`]);
}

// Your turn: Write the async function 'loadDashboard' here
async function loadDashboard() {
    let id = await getUserId();
    let orders = await getUserOrders(id);
    console.log(orders);
}

loadDashboard();
console.log("**********************************************");

console.log("Example 07");
/*
Example 4: The Array Mapper
Sometimes an async function will return an array of data. It is a very common pattern to await the array and then loop through it.
 
Your Goal: Await the array of items and use a forEach loop or for...of loop to log each item individually.
*/
function getProductList() {
    return Promise.resolve(["Laptop", "Mouse", "Keyboard"]);
}

// Your turn: Write the async function 'printInventory' here
async function printInventory() {
    let products = await getProductList();

    // Loop through and log each product
    products.forEach(product => {
        console.log(`Product: ${product}`);
    });
}

printInventory();
console.log("**********************************************");

console.log("Example 08");
/*
Example 5: Handling Rejections (Try / Catch)
What happens if something goes wrong? If a Promise fails (rejects), your script will throw an unhandled error unless you wrap your code in a try...catch block.
 
Your Goal: Wrap your await code inside a try block, and handle the failure gracefully inside the catch block.
*/
function connectToDatabase() {
    // This promise explicitly fails (rejects)
    return Promise.reject("Database Connection Timeout Error!");
}

// Your turn: Write the async function 'startApp' with try/catch
async function startApp() {
    try {
        let connection = await connectToDatabase();
        console.log(connection); // This won't run because it fails
    } catch (error) {
        console.log("Alert! Application failed to start safely:", error);
    }
}

startApp();
console.log("**********************************************");



