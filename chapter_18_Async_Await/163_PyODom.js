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
console.log("**********************************************");

console.log("Example 03");
/*
Example 1: The Online Food Delivery Flow
This mimics a food app workflow. Each step relies on the previous step completing sequentially.

Your Goal: Complete the runDeliveryWorkflow function using async/await to log each step in order.
*/
function placeOrder() {
    return Promise.resolve("Order received by restaurant");
}

function prepareFood() {
    return Promise.resolve("Food is cooked and packed");
}

function assignDriver() {
    return Promise.resolve("Driver has picked up the meal");
}

function deliverMeal() {
    return Promise.resolve("Meal delivered to your doorstep!");
}

// Your turn: Write the async function
async function runDeliveryWorkflow() {
    // TODO: Await each function sequentially and log the output
    let step1 = await placeOrder();
    console.log("Status:", step1);

    let step2 = await prepareFood();
    console.log("Status:", step2);

    let step3 = await assignDriver();
    console.log("Status:", step3);

    let step4 = await deliverMeal();
    console.log("Status:", step4);
}

runDeliveryWorkflow();
console.log("**********************************************");

console.log("Example 04");
/*
Example 2: Document Processing and Upload Pipeline
This pattern is very common when dealing with file uploads, where you have to read a file, encrypt it, and then save it to a cloud server.

Your Goal: Create the orchestrator function to handle the processing pipeline.
*/
function readFile() {
    return Promise.resolve("Raw file data read from disk");
}

function compressFile() {
    return Promise.resolve("File size reduced by 40%");
}

function encryptFile() {
    return Promise.resolve("File secured with AES-256 encryption");
}

function uploadToCloud() {
    return Promise.resolve("File successfully saved to AWS S3 bucket");
}

// Your turn: Write the async function
async function startFilePipeline() {
    let file = await readFile();
    console.log("[1]", file);

    let compressed = await compressFile();
    console.log("[2]", compressed);

    let encrypted = await encryptFile();
    console.log("[3]", encrypted);

    let uploaded = await uploadToCloud();
    console.log("[4]", uploaded);
}

startFilePipeline();
console.log("**********************************************");

console.log("Example 04");
/*
Example 3: User Onboarding (Passing Data Through Steps)
Let's make this one slightly trickier. Instead of just printing individual logs, try passing the output of one step into the next step as a parameter.

Your Goal: Chain the steps together by passing the resulting object or ID down the line.
*/
function createUserAccount() {
    return Promise.resolve({ userId: 501, username: "dev_jay" });
}

function createProfile(user) {
    return Promise.resolve(`Profile created for ${user.username} (ID: ${user.userId})`);
}

function sendWelcomeEmail(profileStatus) {
    return Promise.resolve(`Email sent using data: "${profileStatus}"`);
}

// Your turn: Write the async function
async function runOnboarding() {
    // 1. Get the user object
    let user = await createUserAccount();

    // 2. Pass the user object to createProfile
    let profileStatus = await createProfile(user);

    // 3. Pass the profile status text to sendWelcomeEmail
    let emailStatus = await sendWelcomeEmail(profileStatus);

    console.log("Final Onboarding Status:", emailStatus);
}

runOnboarding();
console.log("**********************************************");

console.log("Example 05");
/*
Example 4: Smart Home Automation Routine
Imagine turning on a "Movie Night" macro in a smart home system where devices turn on or off one after the other.

Your Goal: Practice using the standard new Promise(resolve => ...) syntax inside your steps, then orchestrate them.
*/
function dimLights() {
    return new Promise((resolve) => resolve("Living room lights dimmed to 15%"));
}

function turnOnTV() {
    return new Promise((resolve) => resolve("Smart TV turned on & switched to HDMI 1"));
}

function launchNetflix() {
    return new Promise((resolve) => resolve("Netflix application launched successfully"));
}

function closeBlinds() {
    return new Promise((resolve) => resolve("Window blinds closed completely"));
}

// Your turn: Write the async function
async function startMovieNight() {
    let lights = await dimLights();
    console.log(lights);

    let tv = await turnOnTV();
    console.log(tv);

    let app = await launchNetflix();
    console.log(app);

    let blinds = await closeBlinds();
    console.log(blinds);

    console.log("Enjoy your movie!");
}

startMovieNight();
console.log("**********************************************");

console.log("Example 06");
/*
Example 5: Video Game Matchmaking Loop
Before a multiplayer match starts, a game client has to hit multiple sequential checkpoints.

Your Goal: Sequence these match tasks and wrap them in a try...catch block just in case one step fails (a vital habit for production E2E tests and applications).
*/
function connectToGameServer() {
    return Promise.resolve("Connected to US-East Server.");
}

function findOpponent() {
    return Promise.resolve("Match found: Player_99 joined lobby.");
}

function loadMapData() {
    return Promise.resolve("Map textures and assets cached.");
}

function spawnPlayers() {
    return Promise.resolve("Players spawned. Match starting in 3... 2... 1...");
}

// Your turn: Write the async function with error handling
async function startMatch() {
    try {
        let server = await connectToGameServer();
        console.log(server);

        let opponent = await findOpponent();
        console.log(opponent);

        let map = await loadMapData();
        console.log(map);

        let spawn = await spawnPlayers();
        console.log(spawn);

    } catch (err) {
        console.error("Matchmaking aborted due to an error:", err);
    }
}

startMatch();





