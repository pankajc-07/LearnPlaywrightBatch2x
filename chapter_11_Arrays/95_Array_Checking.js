// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);
console.log("*****************************************");

// every & some in Arrays
console.log([80, 90, 85].every(s => s >= 70)); // true
console.log([80, 60, 85].every(s => s >= 70)); // false
console.log("*****************************************");

// Playwright API 
console.log([200, 201, 203].every(statuscode => statuscode > 200));
console.log("*****************************************");

// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70)); // true
console.log([80, 90, 85].some(s => s < 70)); // false
console.log("*****************************************");
//arrow : s => s >= 70
console.log("**********************************************");

// Practice Examples
console.log("Example 01");
/*
When performing API testing or intercepting network responses in Playwright using page.waitForResponse(),
you often extract JSON data. You need to verify that the orders field in the response payload is
structurally sound before looping through it.

Task: Write a function that takes a dynamic API response object and checks if the orders property exists
and is a valid JavaScript array.
*/
let orders = Array.isArray(['order_101', 'order_102', 'order_103']);
console.log(orders);
console.log("**********************************************");

console.log("Example 02");
/*
You are testing a financial dashboard. To ensure a secure user experience,
you use Playwright's .all() locator method to grab an array of balance elements.
You extract their visibility states or text values into an array.

Task: Use the correct array method to verify that every single element in the array is non-empty
(i.e., its string length is greater than 0) so no broken/blank UI components are displayed to the user.
*/
const scrapedBalances = ['$1,200.00', '$450.50', '$0.00', '$99.25'];

// let result02 = scrapedBalances.every(s => s.replace('$', '') >= 0)
let result02 = scrapedBalances.every(s => s.trim().length >= 0)

console.log(result02);
console.log("**********************************************");

console.log("Example 03");
/*
On an e-commerce search results page, products can have various badges like "Sale",
"New Arrival", or "Out of Stock".
Your test goal is to confirm that the search algorithm successfully returned at least
one item currently on sale.

Task: You have extracted an array of string badges from the UI.
Use an array method to return true if at least one item contains the badge text "Sale".
*/
const productBadges = ['New Arrival', 'Best Seller', 'Sale', 'New Arrival'];
let sale = productBadges.some(s => s === "Sale");
console.log(sale);
console.log("**********************************************");

console.log("Example 04");
/*
You are scraping a data table from a legacy CRM system using Playwright.
Sometimes the row extraction yields valid user objects, but occasionally it contains null or broken entries.

Task: Write a validation step that first ensures your scraped data container is an array.
If it is, verify that no elements in the array are null or undefined
(Hint: If some elements are null, your test should fail).
*/
const scrapedCrmTableData = [{ id: 1, name: 'Alice' }, null, { id: 3, name: 'Charlie' }];

let elements = scrapedCrmTableData.some(row => row === null || row === undefined);
console.log(elements);



