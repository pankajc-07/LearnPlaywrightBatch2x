function sumOfTwoNumner(a, b) {
    return a + b;
}

let c = sumOfTwoNumner(4, 5);
console.log(c);
console.log("*************************");

let c1 = sumOfTwoNumner(2, 5);
console.log(c1)
console.log("**************************************");

// Practice Examples
console.log("Example 01");
function fun01(p, q) {
    return p * q;
}

let c3 = fun01(2, 3);
console.log(c3);
console.log("**************************************");

console.log("Example 02");
/*
Problem 1: Dynamic Selector Generator
When dealing with side navigation menus or data tables, hardcoding locators for every single button
is inefficient. You want a function that can generate a custom CSS or XPath selector string dynamically
based on the text label of the button.

Task: Write a function named buildMenuSelector that accepts a string parameter (menuItemName).
It should combine this name with a base structure and return a complete Playwright-ready selector string
(e.g., nav >> text="Dashboard").
*/
function buildMenuSelector(menuItemName) {
    return `nav.sidebar-menu >> text="${menuItemName}"`

}
const dashboardSelector = buildMenuSelector("Dashboard");
const settingsSelector = buildMenuSelector("Settings");
console.log(dashboardSelector);
console.log(settingsSelector);
console.log("**************************************");

console.log("Example 03");
/*
Problem 2: UI Price String Sanitizer to Number
When you use Playwright's .textContent() to grab a price from an e-commerce page,
it returns a string like "$1,240.50 USD". You cannot perform math assertions
(like checking if it matches a subtotal) on a raw string.

Task: Create a function named cleanUiPrice that takes a string parameter (rawPrice).
It should strip away the currency symbol, commas, and letters,
converting the remaining characters into a pure JavaScript float number, and return that number.
*/
function cleanUiPrice(rawPrice) {
    const sanitizedString = rawPrice.replace(/[^0-9.]/g, '');
    return parseFloat(sanitizedString);
}
const actualPrice = cleanUiPrice("$1,240.50 USD");

console.log(actualPrice);
console.log(typeof actualPrice);
console.log("**************************************");

console.log("Example 04");
/*
Problem 3: Generating Unique Test Data (Emails)
If your Playwright tests sign up a new user every time they run,
using the same email address will cause a "User already exists" error.
You need a utility to generate a unique email string every single time.

Task: Write a function named generateTestEmail that accepts a baseName string (like "qa_tester").
It should append a unique timestamp (using Date.now()) and a domain name,
then return the newly minted email string to your test.
*/
function generateTestEmail(baseName) {
    const timestamp = Date.now();
    return `${baseName}+${timestamp}@automation.com`;
}

const uniqueEmail = generateTestEmail("playwright_user");
console.log(`Typing registration email: ${uniqueEmail}`);
console.log("**************************************");

console.log("Example 05");
/*
Problem 4: Multi-Item Tax Calculator for Assertions
Before asserting that the "Total Price" displayed on a checkout page is correct,
your test script needs to calculate what the expected total should be based on a subtotal
and a state tax percentage.

Task: Create a function named calculateExpectedTotal that takes two parameters:
subtotal (a number) and taxRate (a decimal percentage, like 0.08 for 8%).
It should calculate the final price rounded to two decimal places and return it as a number.
*/
function calculateExpectedTotal(subtotal, taxRate) {
    const total = subtotal + (subtotal * taxRate);
    return Number(total.toFixed(2));
}
const calculatedTotal = calculateExpectedTotal(150.00, 0.08); // 150 + 8% tax

console.log(`Expected Checkout Total: $${calculatedTotal}`);






