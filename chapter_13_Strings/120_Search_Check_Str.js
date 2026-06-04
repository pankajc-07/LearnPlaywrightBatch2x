// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 
console.log("********************************");

let URL = 'https://staging.amazon.com/api/login?retry=true';

console.log(URL.includes("staging"));
console.log(URL.includes("Production"));

console.log(URL.startsWith("htt"));
console.log(URL.startsWith("https://"));
console.log(URL.startsWith("http://"));

console.log(URL.endsWith("=true"));
console.log(URL.endsWith("tue"));

console.log(URL.indexOf("a"));
console.log(URL.lastIndexOf("a"));

console.log(URL.indexOf("nothere"));
console.log(URL.indexOf("x"));

console.log(URL.indexOf("https"));
console.log(URL.indexOf("//"));

console.log(URL.search(/login/));
console.log(URL.search(/vwo/));
console.log("********************************");

console.log("Example 01");
/*
The Multi-Environment URL Checker
Scenario: Your Playwright tests run across Staging, UAT, and Production environments.
You need to write a quick assertion helper to ensure the browser doesn't accidentally land on a local development URL.

Task: Write a script that checks a URL string. If it contains "localhost" or "127.0.0.1", flag it as a local environment.

JS Methods to use: .includes() or .indexOf().
*/
const currentUrl = "https://localhost:8080/dashboard";

// Check for local environment signatures
const isLocal = currentUrl.includes("localhost") || currentUrl.includes("127.0.0.1");

console.log(`Is local environment? ${isLocal}`); // true
console.log("********************************");

console.log("Example 02");
/*
The Smart Error Log Scanner
Scenario: During a test, an unexpected modal pops up with an error string: "Error: Critical failure while processing transaction XML_404."

Task: You need to write a conditional check. If the error message contains the specific code "XML_404",
your script should return its starting index position so the team can parse the exact error offset. If it's not found, it should return -1.

JS Methods to use: .indexOf().
*/
const errorMessage = "Error: Critical failure while processing transaction XML_404.";
const targetCode = "XML_404";

// Find the precise position of the error code
const codePosition = errorMessage.indexOf(targetCode);

console.log(`Error code found at index: ${codePosition}`); // 55
console.log("********************************");

console.log("Example 03");
/*
The Breadcrumb Trail Validator
Scenario: A user navigates to the checkout page. The UI breadcrumb shows "Home > Shop > Cart > Checkout".

Task: Ensure the user's progression makes sense by checking if the breadcrumb trail ends exactly with the word "Checkout", and starts with "Home".

JS Methods to use: .startsWith() and .endsWith().
*/
const breadcrumbText = "Home > Shop > Cart > Checkout";

const isCorrectStart = breadcrumbText.startsWith("Home");
const isCorrectEnd = breadcrumbText.endsWith("Checkout");

const isBreadcrumbValid = isCorrectStart && isCorrectEnd;
console.log(`Is breadcrumb valid? ${isBreadcrumbValid}`); // true
console.log("********************************");

console.log("Example 04");
/*
Case-Insensitive Search Matcher
Scenario: A user types "apple" into a search bar, and the search result heading reads: "Found 3 items for 'Apple'".

Task: Your test needs to verify that the search term exists inside the results heading.
Because of the casing mismatch ("apple" vs "Apple"), a standard check will fail. Write a solution that checks if the term exists regardless of case.

JS Methods to use: .toLowerCase() and .includes().
*/
const searchTerm = "apple";
const resultHeading = "Found 3 items for 'Apple'";

// Normalize both to lowercase to safely check inclusion
const matchFound = resultHeading.toLowerCase().includes(searchTerm.toLowerCase());

console.log(`Search term found? ${matchFound}`); // true
console.log("********************************");

console.log("Example 05");
/*
The Dynamic Token Expiry Checker
Scenario: An API response returns an authorization string: "Bearer token_exp_2026_id_9983".

Task: Before proceeding to the next test step, you must verify if this token contains the expiration year snippet
"exp_2026" starting precisely at index position 13.

JS Methods to use: .includes() or .indexOf() with a position parameter.
*/
const apiToken = "Bearer token_exp_2026_id_9983";
const searchSnippet = "exp_2026";

// Passing a second argument to .includes() tells it where to start looking
const isExpiringCorrectly = apiToken.includes(searchSnippet, 13);

console.log(`Token expires in 2026 at the correct position? ${isExpiringCorrectly}`); // true



