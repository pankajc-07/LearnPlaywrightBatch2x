// When Step 2 depends on Step 1's result, you MUST run them sequentially.

// Ste1 - Step 2

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000);
    })
}

async function parallelTest() {

    let [r1, r2, r3] = await Promise.allSettled([

        apiCall("Auth Service"),
        apiCall("User Account Creation"),
        apiCall("Support Page API")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);
}

parallelTest();
console.log("**********************************************");

console.log("Example 01");

function api(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 OK")
        }, 1000);
    })
}

async function parallel() {

    let [r1, r2, r3, r4] = await Promise.allSettled([
        api("Service 01"),
        api("Service 02"),
        api("Service 03"),
        api("Service 04"),
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log(r4);
}

parallel();
console.log("**********************************************");

console.log("Example 02");
/*
Example 1: The Multi-Server Health Check (Mixed Outcomes)
In a real-world system, when you check the status of multiple microservices in parallel,
some will be up and others might be down.
Promise.allSettled is perfect here because one crash won't stop you from seeing the status of the others.
*/
function checkService(serviceName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (serviceName === "Database") {
                reject("Connection Timeout"); // Simulating a failure
            } else {
                resolve({ service: serviceName, status: "Healthy" });
            }
        }, 1500);
    });
}

async function runHealthCheck() {
    console.log("Initiating system-wide health check...");
    let start = Date.now();

    // Practice unpacking the settled array
    let results = await Promise.allSettled([
        checkService("Auth Server"),
        checkService("Database"),
        checkService("Payment Gateway")
    ]);

    console.log(results);
    console.log(`Completed in ~${Date.now() - start}ms`);
}

runHealthCheck();
console.log("**********************************************");

console.log("Example 03");
/*
Example 2: The Batch Email Sender (Filtering Successes vs Failures)
When processing a batch of operations in parallel,
you often need to filter out which ones succeeded and which ones failed so you can log the errors or retry them.
*/
function sendEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("invalid")) {
                reject(`Invalid email address: ${email}`);
            } else {
                resolve(`Sent successfully to ${email}`);
            }
        }, 1000);
    });
}

async function runEmailBatch() {
    const emails = ["user1@test.com", "invalid-email-format", "user2@test.com"];

    let outcomes = await Promise.allSettled(emails.map(email => sendEmail(email)));

    // Practice Exercise: Filter the outcomes array
    let successfulOnes = outcomes.filter(o => o.status === "fulfilled");
    let failedOnes = outcomes.filter(o => o.status === "rejected");

    console.log("Successful deliveries:", successfulOnes.map(o => o.value));
    console.log("Failed deliveries:", failedOnes.map(o => o.reason));
}

runEmailBatch();
console.log("**********************************************");

console.log("Example 04");
/*
Example 3: Third-Party Third-Party API Scraper (Varying Response Times)
Parallel execution shines when APIs take different amounts of time.
Promise.allSettled waits until the absolute slowest API finishes, but they all run at the same time.
*/
function fetchCryptoPrice(coin, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ asset: coin, price: Math.random() * 1000 });
        }, delay);
    });
}

async function runScraperTest() {
    console.log("Fetching market data...");
    let start = Date.now();

    // Triggering three parallel calls with vastly different response delays
    let [btc, eth, sol] = await Promise.allSettled([
        fetchCryptoPrice("BTC", 500),   // Fast
        fetchCryptoPrice("ETH", 2500),  // Slow
        fetchCryptoPrice("SOL", 1200)   // Medium
    ]);

    console.log("Bitcoin data:", btc);
    console.log("Ethereum data:", eth);
    console.log("Solana data:", sol);

    // Note how the total time is bound by the slowest delay (2500ms)
    console.log(`Total scraping time: ~${Date.now() - start}ms`);
}

runScraperTest();
console.log("**********************************************");

console.log("Example 04");
/*
Example 4: The Metrics Dashboard (Graceful Degradation)
If a non-critical widget on a dashboard fails to load, you don't want to break the entire page.
Using Promise.allSettled allows you to safely render what works and show an error state for what failed.
*/
function loadWidgetData(widgetName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (widgetName === "StockTicker") {
                reject("API Rate Limit Exceeded");
            } else {
                resolve(`${widgetName} Data Loaded`);
            }
        }, 800);
    });
}

async function renderDashboard() {
    console.log("Loading dashboard widgets...");

    let widgets = ["UserProfile", "StockTicker", "WeatherFeed"];
    let settledWidgets = await Promise.allSettled(widgets.map(w => loadWidgetData(w)));

    settledWidgets.forEach((result, index) => {
        let name = widgets[index];
        if (result.status === "fulfilled") {
            console.log(`[Card] ${name}: ${result.value}`);
        } else {
            console.log(`[Card] ${name}: Failed to load. (Reason: ${result.reason})`);
        }
    });
}

renderDashboard();
console.log("**********************************************");

console.log("Example 05");
/*
Example 5: Massive Parallel File Download (Performance Tracking)
This exercise simulates firing off multiple requests simultaneously.
Pay attention to how using an array loop dynamically builds the promise array inside Promise.allSettled.
*/
function downloadFile(fileId) {
    return new Promise(resolve => {
        let randomSpeed = Math.floor(Math.random() * 1500) + 500; // between 500ms and 2000ms
        setTimeout(() => {
            resolve(`File_${fileId}.pdf downloaded`);
        }, randomSpeed);
    });
}

async function runBulkDownload() {
    console.log("Starting bulk downloads...");
    let start = Date.now();

    // Dynamically creating an array of 5 promises running in parallel
    let downloadPromises = [];
    for (let i = 1; i <= 5; i++) {
        downloadPromises.push(downloadFile(i));
    }

    let completionReports = await Promise.allSettled(downloadPromises);

    console.log(`Downloaded ${completionReports.length} items.`);
    console.log(`Total sequence took only: ~${Date.now() - start}ms`);
}

runBulkDownload();
console.log("**********************************************");

