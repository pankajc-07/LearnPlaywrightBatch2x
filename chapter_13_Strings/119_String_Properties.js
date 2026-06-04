// Properties of string
console.log(typeof ("200"));
let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13

// Access by index
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// index = 0, length = 1
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log("**************************************");

console.log(typeof (70));
console.log(typeof ("70"));
console.log(typeof ("Pankaj"));

let str01 = "Hi , Good Morning!";
console.log(str01.length);

console.log(str01[0]);
console.log(str01[5]);
console.log(str01[10]);
console.log(str01[-1]);

console.log(str01.at(-1));
console.log(str01.at(-6));

console.log(str01.charAt(0));
console.log(str01.charCodeAt(0));

// console.log(str01.charAt(-5));// This does not work, it returs NAN
// console.log(str01.charCodeAt(-5));// This does not work, it returs NAN
console.log("**************************************");

console.log("Example 01");
/*
The Dynamic Order ID Extractor
Scenario: After submitting a form, the page displays a success message:
"Success! Your order #ORD-2026-99823 has been placed."

Task: Write a function that takes this full string,
extracts only the order ID (ORD-2026-99823), and checks if it starts with "ORD-".

JS Properties/Methods to use: .split(), .includes(), or .substring(),
and .startsWith().
*/
const successMessage = "Success! Your order #ORD-2026-99823 has been placed.";

// Extracting using split
const parts = successMessage.split("#"); // ["Success! Your order ", "ORD-2026-99823 has been placed."]
const rawId = parts[1].split(" "); // ["ORD-2026-99823", "has", "been", "placed."]
const orderId = rawId[0];

console.log(`Extracted ID: ${orderId}`); // "ORD-2026-99823"

// Validation
const isValid = orderId.startsWith("ORD-");
console.log(`Is valid order ID? ${isValid}`); // true
console.log("**************************************");

console.log("Example 02");
/*
Scenario: You fetch the text content of a header element using Playwright's textContent().
Because of bad HTML formatting, the returned string is: "   \n  Welcome to the Dashboard!   \t "

Task: Clean up the string by removing all leading/trailing whitespace and line breaks, and verify its exact length after cleanup.

JS Properties/Methods to use: .trim() and .length.
*/

const messyText = "   \n  Welcome to the Dashboard!   \t ";

// Clean the string
const cleanText = messyText.trim();
console.log(`Cleaned: "${cleanText}"`); // "Welcome to the Dashboard!"

// Check length
const textLength = cleanText.length;
console.log(`Length: ${textLength}`); // 25
console.log("**************************************");

console.log("Example 03");
/*
Scenario: After clicking a pagination button, the browser URL changes to https://example.com/products?page=3&sort=desc.

Task: You need to assert that the current page is indeed page 3. Write a script to check if the URL contains the substring page=3.

JS Properties/Methods to use: .includes().
*/
// In Playwright, you'd get this via: const url = page.url();
const currentUrl = "https://example.com/products?page=3&sort=desc";

const isPageThree = currentUrl.includes("page=3");
console.log(`Is on page 3? ${isPageThree}`); // true
console.log("**************************************");

console.log("Example 04");
/*
Scenario: On a checkout review page, the UI displays the user's masked payment info: "Visa ending in ************1234".

Task: Ensure the UI masking is working correctly by verifying that the string ends exactly with the 4 digits 1234.

JS Properties/Methods to use: .endsWith().
*/
// In Playwright: const cardText = await page.locator('.card-info').textContent();
const cardText = "Visa ending in ************1234";

const isCorrectCard = cardText.endsWith("1234");
console.log(`Ends with 1234? ${isCorrectCard}`); // true
console.log("**************************************");

console.log("Example 05");
/*
Scenario: You have a base selector for a table row: const baseLocator = "text=User_Role";.

Task: For a data-driven test, you need to replace the placeholder Role with a dynamic variable (e.g., "Admin"),
and convert the entire final locator string to lowercase to handle a case-insensitive locator strategy.

JS Properties/Methods to use: .replace() and .toLowerCase().
*/
const baseLocator = "text=User_Role";
const roleToTest = "Admin";

// Replace placeholder and convert to lowercase
const finalLocator = baseLocator.replace("Role", roleToTest).toLowerCase();

console.log(finalLocator); // "text=user_admin"
// Usage in Playwright: await page.locator(finalLocator).click();








