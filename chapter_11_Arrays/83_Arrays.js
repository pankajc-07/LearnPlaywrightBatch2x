let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// length = 3, Index - 0,1,2
console.log(fruits_fresh);
console.log("************************");

let arr = [10, 20, 30, 40]; // 0-3: 4

console.log(arr[0]);
console.log(arr[3])
console.log(arr[4]); // undefined
console.log("************************");

let testResults = ["pass", "fail", "pass", "skip"];
console.log(testResults);
console.log("************************");

let mixed = [1, "hello", true, null]; // JS arrays can hold any type.
console.log(mixed)
console.log("************************");

//Practice Examples

console.log("Example 01");
let sports = ["cricket", "football", "baseball", "hokey"];
console.log(sports[1]);
console.log(sports[4]);
console.log(sports);
console.log("************************");

console.log("Example 02");
let mixed01 = [100, "hi", true, null, , "Heloo"]; // JS arrays can hold any type.
console.log(mixed01)
console.log("************************");

console.log("Example 03");
let mixed02 = ["how", , true, 0.7, null, "Great"];
console.log(mixed02[1]);
console.log(mixed02);
console.log("************************");

console.log("Example 04");
// A list of URLs to test (All Strings)
const testEnvUrls = [
    "https://dev.example.com",
    "https://staging.example.com",
    "https://prod.example.com"
];
console.log(testEnvUrls);
console.log(testEnvUrls[1]);

// A list of expected status codes (All Numbers)
const successCodes = [200, 201, 204];
console.log(successCodes[2]);
console.log(successCodes);
console.log("************************");

console.log("Example 05");
// A mixed array containing String, Number, Boolean, and null
const mixedTestData = ["AdminUser", 101, true, null];
console.log(mixedTestData);
console.log(mixedTestData[3]);
console.log("************************");

console.log("Example 06");
// An array of user objects for a login test
/*
In Playwright, you will use this all the time.
It is an array where every item is a structured object.
It’s perfect for data-driven testing,
(running the same test with different user credentials or inputs).

Playwright Use Case: You can use a for...of loop over this array,
to dynamically generate three different login test cases.
*/
const testUsers = [
    { username: "standard_user", role: "customer", shouldPass: true },
    { username: "locked_out_user", role: "blocked", shouldPass: false },
    { username: "admin_user", role: "admin", shouldPass: true }
];
console.log(testUsers);
console.log("************************");

console.log("Example 07");
// Creating an array from a string (creates an array of characters)
/*
Playwright Use Case: This is incredibly useful 
when Playwright's locator.allTextContents() isn't quite what you need,
and you are extracting raw data from the browser DOM using page.$$eval().
*/
const characters = Array.from("PLAYWRIGHT");
// Result: ['P', 'L', 'A', 'Y', 'W', 'R', 'I', 'G', 'H', 'T']
console.log(characters);
console.log("************************");

console.log("Example 08");
/*
Pro-Tip: Most JS developers prefer the square brackets [] over new Array()
because it's shorter, cleaner,
and less prone to weird bugs (for instance, new Array(5) creates an array with 5 empty slots,
it doesn't create an array containing the number 5!).
*/
// Creating an empty array with a specific length (3 empty slots)
const emptyPositions = new Array(3);
console.log(emptyPositions);

// Creating an array with predefined elements
const browserTypes = new Array("chromium", "firefox", "webkit");
console.log(browserTypes);

//Real-World Playwright Example: Putting it Together
/*Here is a quick look at how you might actually use an Array of Objects
inside a Playwright test file to run a data - driven test:

import { test, expect } from '@playwright/test';

// 1. Define your array of test data
const searchQueries = [
  { term: 'Playwright', expectedTitle: 'Playwright' },
  { term: 'JavaScript', expectedTitle: 'JavaScript' },
];

// 2. Loop through the array to generate dynamic tests
for (const query of searchQueries) {
  test(`Search test for ${query.term}`, async ({ page }) => {
    await page.goto('https://example.com');
    
    // Simulate typing into a search bar
    await page.fill('#search-input', query.term);
    await page.press('#search-input', 'Enter');
    
    // Assert the title contains our expected array data
    await expect(page).toHaveTitle(new RegExp(query.expectedTitle));
  });
}

*/