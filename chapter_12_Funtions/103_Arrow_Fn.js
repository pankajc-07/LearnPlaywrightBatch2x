// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");
console.log("**************************************");

// Practice Examples
console.log("Example 01");

const fun01 = a => a + 2;
console.log(fun01(10));
console.log("**************************************");

console.log("Example 02");
const fun02 = name => console.log(name);
fun02("Pankaj");
console.log("**************************************");

console.log("Example 03");
const fun03 = (a, b) => a / b;
console.log(fun03(10, 2));
console.log("**************************************");

console.log("Example 04");
/*
Problem 1: Inline Test Step Wrapper
Playwright features a useful API called test.step('Step Name', async () => {}) to break down long E2E tests
into clear, reportable sub-sections.

Task: Convert a traditional anonymous function into a concise arrow function wrapper that simulates
clicking a button.

Convert this: function() { console.log("Clicking Login"); } into an arrow function.
*/
const simulateTestStep = (stepName, actionCallback) => {
    console.log(`[REPORTING STEP]: Running "${stepName}"`);
    actionCallback();
};

// Execution showing the arrow function passed directly as an argument
simulateTestStep("Click Login Button", () => {
    // Playwright equivalent: await page.click('#login-submit');
    console.log("Playwright executed: Clicked #login-submit");
});
console.log("**************************************");

console.log("Example 05");
/*
Problem 2: Single-Line Implicit Return for Dynamic Selectors
When you write an arrow function with only a single expression,
you can omit the curly braces {} and the return keyword. This is called an implicit return.

Task: Write a single-line arrow function expression named getRowSelector.
It should accept an id parameter and implicitly return a template literal string matching this format:
tr[data-id="<id>"].
*/
const getRowSelector = id => `tr[data-id="${id}"]`;

// Usage in Playwright locator definitions:
const targetRow = getRowSelector("order-9942");

console.log(`Targeting UI element: ${targetRow}`);
console.log("**************************************");

console.log("Example 06");
/*
Problem 3: Filtering UI Text Strings (Array Integration)
You used Playwright's locator.allTextContents() to extract an array of text values from a navigation bar.
You need to verify that certain legacy menu links (like links containing the word "Beta")
are present or need filtering.

Task: Write an arrow function inside an array .filter() method that takes a string element
and returns true if the string contains the phrase "Beta".
*/
const UI_NavLinks = ["Dashboard", "Settings (Beta)", "Billing", "Analytics (Beta)"];

// Clean, readable single-line filtering
const betaFeatures = UI_NavLinks.filter(link => link.includes("Beta"));

console.log("Found Beta features in UI:", betaFeatures);
console.log("**************************************");

const servers = ["Production", "Staging", "Master (Dev)", "Branch1 (Dev)", "Branch2 (Dev)"];

const devServer = servers.filter(d => d.includes("Dev"));
console.log(devServer);
console.log("**************************************");

console.log("Example 07");
/*
Problem 4: Browser-Side Mapping via page.evaluate()
When scraping data, you might extract an array of raw objects from the browser context
using page.evaluate(). You need to clean this data up instantly using an array .map()
method powered by an arrow function.

Task: You have an array of raw product objects:
[{ name: "item1", price: "$10" }, { name: "item2", price: "$20" }].
Use .map() with a clean arrow function to transform it into an array of just the string names:
["item1", "item2"].
*/
const rawUiProducts = [
    { name: "MacBook Pro", price: "$2499" },
    { name: "iPhone 15", price: "$999" }
];

// Extract just the names into a clean list for assertion testing
const productNames = rawUiProducts.map(product => product.name);

console.log("Extracted items:", productNames);
console.log("**************************************");

const rawBike = [
    { name: "ABC", price: "$2499" },
    { name: "DEF", price: "$999" },
    { name: "GHI", price: "$700" }
];

const bike = rawBike.map(b => b.name)
const price01 = rawBike.map(p => p.price)
console.log(bike);
console.log(price01);







