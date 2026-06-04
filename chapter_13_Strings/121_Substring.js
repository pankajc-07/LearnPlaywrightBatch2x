let str = "Login_Test_Pass_001";
// slice(start, end) — negative indexes supported
console.log(str.slice(0, 5)); // 0,4 ->
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));


// substring(start, end) — no negatives (treats as 0)

console.log(str.substring(6, 10));
console.log(str.at(0));
console.log("********************************");

console.log("Example 01");
/*
The Confirmation Code Snatcher
Scenario: Your test fills out a registration form and submits it. A flash message appears:
"Registration successful! Your activation code is: XF-9931-PL. Please verify your email."

Task: Extract exactly the 10-character activation code (XF-9931-PL) based on its known length and position relative to the label prefix.

JS Methods to use: .substring() or .slice() combined with .indexOf().
*/
const flashMessage = "Registration successful! Your activation code is: XF-9931-PL. Please verify your email.";
const prefix = "Your activation code is: ";

// Find where the code actually starts
const startIndex = flashMessage.indexOf(prefix) + prefix.length;
// The code is exactly 10 characters long
const endIndex = startIndex + 10;

const activationCode = flashMessage.substring(startIndex, endIndex);
console.log(`Extracted Code: "${activationCode}"`); // "XF-9931-PL"
console.log("********************************");

console.log("Example 02");
/*
The Clean URL Slug Extractor
Scenario: You are testing an e-commerce blog. You click on an article and the URL becomes https://example.com/blog/top-10-testing-tools.

Task: For analytics verification, you need to extract just the final "slug" part of the URL (top-10-testing-tools) without the domain or folder path.

JS Methods to use: .slice() or .substring() combined with .lastIndexOf().

*/
const currentUrl = "https://example.com/blog/top-10-testing-tools";

// Find the position of the last forward slash
const lastSlashIndex = currentUrl.lastIndexOf("/");

// Extract everything after that slash to the end of the string
const urlSlug = currentUrl.slice(lastSlashIndex + 1);
console.log(`URL Slug: "${urlSlug}"`); // "top-10-testing-tools"
console.log("********************************");

console.log("Example 03");
/*
The Date Range Splitter
Scenario: A dashboard component displays a date filter range badge as a single string: "2026-01-01 to 2026-01-15".

Task: You need to extract just the end date (2026-01-15) to assert that the report scope correctly defaults to a two-week window.

JS Methods to use: .slice() or .substring().
*/
const dateRangeBadge = "2026-01-01 to 2026-01-15";

// "2026-01-15" is exactly 10 characters long at the very end of the string
// Using a negative index with .slice() counts backwards from the end
const endDate = dateRangeBadge.slice(-10);

console.log(`End Date: "${endDate}"`); // "2026-01-15"
console.log("********************************");

console.log("Example 04");
/*
The Dynamic Price Parser
Scenario: A cart total element returns the text string "$1,249.99 USD".

Task: To perform a mathematical assertion (like verifying a tax calculation),
you need to strip away the currency symbol ($) and the trailing currency code ( USD), leaving only the raw numeric string "1,249.99".

JS Methods to use: .slice().
*/
const originalPriceString = "$1,249.99 USD";

// .slice(1, -4) removes the 1st character ($) and drops the last 4 characters ( USD)
const cleanPriceNumeric = originalPriceString.slice(1, -4);

console.log(`Cleaned Price: "${cleanPriceNumeric}"`); // "1,249.99"
// Now it's ready to be converted to a number after removing commas!
console.log("********************************");

console.log("Example 05");
/*
The "First N Characters" Preview Checker
Scenario: On a blog homepage, card elements show a short snippet of the article.
The requirements state that the preview text must be truncated to exactly the first 50 characters, followed by "...".

Task: You fetch the full article text from a database tool and need to generate what the expected 50-character UI preview snippet should look like.

JS Methods to use: .slice() or .substring().
*/
const fullArticleText = "Playwright is an amazing framework for Web Testing and Automation. It supports Chromium, WebKit, and Firefox.";

// Extract the first 50 characters and append the ellipsis
const expectedPreview = fullArticleText.substring(0, 50) + "...";

console.log(`Expected UI Snippet: "${expectedPreview}"`);
// Output: "Playwright is an amazing framework for Web Testing ..."







