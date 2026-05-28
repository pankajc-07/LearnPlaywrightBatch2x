function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pankaj");

let result = greetByName("Rajesh");
console.log(result);
console.log("*****************************");

function begger(money) {
    console.log("Thanks", money);
}

begger(2000);

let returnMesomething = begger(100);
console.log(returnMesomething);
console.log("**************************************");

// Practice Examples
console.log("Example 01");
function fun01(param) {
    console.log("This is a function with parameter and no return : ", param);
}

fun01("Prameter 01");

let param02 = fun01("Parameter 02");
console.log(param02);
console.log("**************************************");

console.log("Example 02");
/*
Problem 1: Hardcoded Environment Reset
Before starting certain test files, you need to ensure the browser viewport is
explicitly reset to a standard desktop dimension and the browser cookies are wiped clear.

Task: Write a function named resetTestEnvironment that doesn't accept any arguments.
Inside, simulate calling two placeholder Playwright commands: one to clear cookies and
one to resize the window to 1920x1080. The function should not return anything.
*/
function resetTestEnvironment() {
    console.log("Initializing environment cleanup...");
    console.log("Cookies cleared. Viewport forced to 1920x1080.");
}
resetTestEnvironment();
console.log("**************************************");

console.log("Example 03");
/*
Problem 2: Closing the Global Cookie Consent Banner
Almost every modern web application displays a cookie banner on the first launch.
You want a quick helper function you can throw into your beforeEach hook to get it out of the way.

Task: Create a function named dismissCookieBanner.
It should use a hardcoded selector (e.g., '#accept-cookies-btn') to click the button.
It requires no inputs and passes back no outputs.
*/
function dismissCookieBanner() {
    const targetSelector = "#accept-cookies-btn";
    console.log(`Playwright: Clicking locator "${targetSelector}" to clear the UI.`);
}
dismissCookieBanner();
console.log("**************************************");

console.log("Example 04");
/*
Problem 3: Static Test Heartbeat Logger
When running long-running End-to-End (E2E) suites,it's helpful to print visual markers
in the terminal console to separate test phases (like an initialization phase).

Task: Write a function named logInitializationPhase.
When called, it should simply log a stylized banner to the console using console.log()
to notify the QA engineer that setup tasks are executing.
*/
function logInitializationPhase() {
    console.log("========================================");
    console.log("🚀 PLAYWRIGHT: STARTING INITIALIZATION PHASE");
    console.log("========================================");
}
logInitializationPhase();
console.log("**************************************");

console.log("Example 05");
/*
Problem 4: Toggling Dark Mode (Global UI State)
You are testing a dashboard application that has a dark mode switch in a fixed header.
You need a simple utility to toggle this state without needing to pass variables around,
just to see if the UI breaks.

Task: Create a function named toggleDarkMode that locates the theme toggle button
using a static selector and clicks it.
*/
function toggleDarkMode() {
    const toggleSelector = '.theme-switch__input';

    console.log(`Step: Interacting with theme control element [${toggleSelector}]`);
}
toggleDarkMode();






