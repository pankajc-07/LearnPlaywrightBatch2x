// Concatenation in Arrays
let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);
console.log("**********************************************");

// Practice Examples
console.log("Example 01");
let p = [2, 4, 6, 8];
let q = [1, 3, 5, 7];

let r = p.concat(q);
console.log(r);

let s1 = p.concat(p);
console.log(s1);

let s2 = q.concat(p);
console.log(s2);

let x1 = [...p, ...q];
console.log("This is spread (modern way) : " + x1);

let x2 = [...p, ...p];
console.log("This is spread (modern way) : " + x2);
console.log("**********************************************");

console.log("Example 02");
let p1 = ["A", "B", "C", "D"];
let q1 = ["P", "Q", "R", "S"];

let s3 = p1.concat(q1);
console.log(s3);

let s4 = p1.concat(p1);
console.log(s4);

let s5 = q1.concat(q1);
console.log(s5);

let s6 = q1.concat(p1);
console.log(s6);
console.log("**********************************************");

console.log("Example 03");
let p11 = ["A", "B", "C", "D"].join("|");
console.log(p11);
console.log("**********************************************");

console.log("Example 03");
let p12 = [2, 4, 6, 8].join("|");
console.log(p12);
console.log("**********************************************");

console.log("Example 04");
/*
You are setting up a smoke test suite. You have a list of standard user accounts that must be tested
in every environment, and a separate list of accounts exclusive to the Staging environment.

Task: Create a function that takes the standard accounts array and the staging accounts array,
concatenates them into a single list, and returns it so Playwright can loop through them
for data-driven testing.
*/
let standardUsers = ['user1@test.com', 'user2@test.com'];
let stagingUsers = ['stage_admin@test.com', 'stage_tester@test.com'];

let allUsers = standardUsers.concat(stagingUsers);
console.log(allUsers);
console.log("**********************************************");

console.log("Example 05");
/*
While testing an e-commerce site, you need to verify that a dropdown contains all expected items.
The dropdown options are split into two categories in your test data: coreElectronics and accessories.

Task: Combine these two arrays into one master list using a different concatenation method than Problem 1.
Then, write a mock Playwright assertion step (using a comment or pseudo-code)
showing how you would check that the combined list has a specific total length.
*/
let coreElectronics = ['Laptop', 'Phone', 'Tablet'];
let accessories = ['Mouse', 'Keyboard', 'Charger'];

let total = [...coreElectronics, ...accessories];
console.log(total);
console.log("**********************************************");

console.log("Example 06");
/*
You are scraping or validating text from a paginated table using Playwright's .allTextContents().
Page 1 returns one array of strings, and Page 2 returns another.

Task: Write a script that concatenates these two arrays.
However, to keep your test logs clean, ensure that the final combined array does not modify the original
page arrays (it must be a immutable/pure combination).
*/
let page1Titles = ['Home - MyStore', 'Products - MyStore'];
let page2Titles = ['Cart - MyStore', 'Checkout - MyStore'];

let allTitles = [...page1Titles, ...page2Titles];
console.log(allTitles);
console.log("**********************************************");

console.log("Example 07");
/*
When running Playwright tests via the CLI, you want to pass a set of global tags
(e.g., ['@smoke', '@regression']) and append feature-specific tags dynamically
based on the module you are testing (e.g., ['@billing', '@checkout']).

Task: Concatenate these arrays together, but write it in a modern,
concise way (hint: spread operator) that allows you to easily inject a single extra string item
(like '@critical') right in the middle of the concatenation process.
*/
const globalTags = ['@smoke', '@regression'];
const featureTags = ['@billing', '@checkout'];

const allTags = [...globalTags, '@critical', ...featureTags];
console.log(allTags);

console.log('Running Playwright with tags: ', allTags.join(' or '));

console.log((allTags.slice(1, -1)).join(' | '));





