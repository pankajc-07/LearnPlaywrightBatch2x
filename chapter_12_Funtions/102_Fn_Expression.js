const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r);

// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}

// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));
console.log("**************************************");

// Practice Examples
console.log("Example 01");

function fun01(name) {
    return `"Hi", ${name}`;
}

const exp01 = function (name) {
    return `"Heloo",${name}`;
}

console.log(fun01("Pankaj"));
console.log(exp01("Pankaj"));
console.log("**************************************");

console.log("Example 02");
/*
Problem 1: An On-The-Fly Text Matcher
When validating dynamic page headers, you want an anonymous function expression that takes two strings:
the actual UI text and the expected text. It should return a boolean checking if they match
(case-insensitive). Because this is a quick utility, assign it to a const variable.

Task: Create a function expression named isTextMatch that accepts uiText and expectedText,
normalizes both to lowercase, and returns true or false.
*/

const isTextMatch = function (uiText, expectedText) {
    return uiText.toLowerCase().trim() === expectedText.toLowerCase().trim();
}
const headerText = "  Welcome to Dashboard  ";
const expected = "welcome to dashboard";

if (isTextMatch(headerText, expected)) {
    console.log("Assertion Passed: Headers match!");
} else {
    console.log("Assertion Failed: Headers do not match!");
}

// const isTextMatch = function (uiText, expectedText) {
//     return uiText.toLowerCase().trim() === expectedText.toLowerCase().trim();
// }

// const text = " Home Page   ";
// const expected = "home page    ";
// if (isTextMatch(text, expected)) {
//     console.log("PASS");
// } else {
//     console.log("FAIL");
// }
console.log("**************************************");

console.log("Example 03");
/*
Problem 2: Playwright page.evaluate() Script Container
Sometimes you need to run a small snippet of JavaScript directly inside the browser's context
to find hidden properties (like looking for a global window.config object).
Playwright's page.evaluate() can accept a function expression directly.

Task: Write a function expression named fetchClientWindowConfig that takes no parameters.
Inside, simulate accessing a browser property by returning an object with a hardcoded env: "production"
property.
*/
const fetchClientWindowConfig = function () {
    return { env: "production", version: "2026.1" };
}
console.log("Executing in Playwright:");

console.log("Config retrieved from browser:", fetchClientWindowConfig());
console.log("**************************************");

console.log("Example 04");
/*
Problem 3: Conditional Locator Switcher
Depending on whether a test is running on a Mobile browser or a Desktop browser,
Playwright needs to click a different menu button (a hamburger icon vs. a top navbar link).

Task: Write a function expression named getMenuLocator that accepts a string parameter (deviceType).
If deviceType is 'mobile', return '.hamburger-menu'; otherwise, return '.desktop-navbar'.
*/
const getMenuLocator = function (deviceType) {
    if (deviceType === 'mobile') {
        return '.hamburger-menu';
    }
    return '.desktop-navbar';
}
const mobileSelector = getMenuLocator('mobile');
const desktopSelector = getMenuLocator('desktop');

console.log(`Mobile test will click: ${mobileSelector}`);
console.log(`Desktop test will click: ${desktopSelector}`);
console.log("**************************************");

console.log("Example 05");
/*
Problem 4: Dynamic Timeout Calculator for Flaky Networks
Some environments (like Staging or CI pipelines) run slower than a local machine.
You want a function expression to calculate a custom timeout value for Playwright assertions
(expect(locator).toBeVisible({ timeout: ... })) based on the current environment.

Task: Create an arrow function expression named calculateTimeout.
It should take a boolean parameter isCiPipeline. If true, return 10000 (10 seconds);
if false, return 3000 (3 seconds).
*/
const calculateTimeout = (isCiPipeline) => {
    return isCiPipeline ? 10000 : 3000;
};

// Playwright test block usage:
const ciMode = true; // e.g., process.env.CI
const dynamicTimeout = calculateTimeout(ciMode);

console.log(`Setting Playwright element locator timeout to: ${dynamicTimeout}ms`);

