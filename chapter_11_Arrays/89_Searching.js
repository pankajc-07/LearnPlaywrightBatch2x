let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
console.log(results.indexOf("fail")); //1
console.log("********************************")

console.log(results.indexOf("skip")); // -1
console.log("********************************")

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail"));    // 4
console.log("********************************")

// includes — returns boolean
console.log(results.includes("error")); // true
console.log("********************************")

console.log(results.includes("skip"));       // false
console.log("********************************")


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);
console.log("********************************")

// findIndex
let p = nums.findIndex(n => n > 20); // 1, 2, 3
console.log(p);
console.log("********************************")

let q = nums.findLast(n => n > 20); // 45] 
console.log(q);
console.log("********************************")

let s = nums.findLastIndex(n => n > 20);// 3
console.log(s);
console.log("********************************")

//Practice examples
console.log("Example 01");
let browser = ["chrome", "edge", "firefox", "chrome", "opera", 'edge', "safari"];

console.log(browser.indexOf("chrome"));//0
console.log(browser.indexOf("edge"));//1
console.log(browser.indexOf("IE"));//-1

console.log(browser.lastIndexOf("edge"));//5
console.log(browser.lastIndexOf("chrome"));//3

console.log(browser.includes("IE"));//false
console.log(browser.includes("safari"));//true

console.log("********************************")

console.log("Example 02");
let responseAPI = [200, 404, 300, 200, 404, 500];

let a = responseAPI.find(x => x > 200);
console.log(a);//404

let b = responseAPI.findIndex(x => x > 400);
console.log(b);//1

let c = responseAPI.findLastIndex(x => x < 300);
console.log(c);//3

let d = responseAPI.findLast(x => x > 200);
console.log(d);//500
console.log("********************************")

console.log("Example 03");
/*
Scenario: You query an API or scrape a user management table to get a list of
active sessions. You need to grab the user object for the person named "Marcus"
so you can validate his access token.

Your Task: Given an array of objects, use .find() to isolate Marcus's object and
save it to a variable named targetUser.
*/

const sessions = [
    { name: 'Elena', role: 'Admin' },
    { name: 'Marcus', role: 'Editor' },
    { name: 'Siddharth', role: 'Viewer' }
];

const targetUser = sessions.find(user => user.name === "Marcus");
console.log(targetUser);
console.log("********************************")

console.log("Example 04");
/*
Scenario: You are automating an inventory check.
You need to pull the list of items from a product grid and find the first product
that is marked as out of stock (stock: 0) so your script can test
the "Notify Me" button behavior.

Your Task: Use .find() to locate the first object where the stock count is 0.
*/

const productGrid = [
    { id: 'item1', name: 'Laptop', stock: 5 },
    { id: 'item2', name: 'Mouse', stock: 0 },
    { id: 'item3', name: 'Keyboard', stock: 0 }
];

const obj01 = productGrid.find(obj => obj.stock === 0);
console.log(obj01);
console.log("********************************")

console.log("Example 05");
/*
Scenario: After clicking a "Submit" button in Playwright,
you intercept the browser's console or network logs.
You want to see if a critical network or server error occurred.

Your Task: Write a .find() statement that looks through an array of
log strings and pulls out the first string that includes the word "CRITICAL"
or "500".
*/

const consoleLogs = [
    "INFO: Page loaded successfully.",
    "WARN: Asset 'logo.png' took too long to load.",
    "ERROR 500: Internal Server Error occurred at checkout.",
    "DEBUG: Session token refreshed."
];

const str01 = consoleLogs.find(log => log.includes('500') || log.includes('CRITICAL'));
console.log(str01);
console.log("********************************")

console.log("Example 06");
/*
Scenario: You are searching a list of discount coupons on a checkout page
to see if a specific coupon code ("SUMMER_50") is available to be used.
If it's not found, .find() returns undefined, which can crash your tests
if you aren't careful.

Your Task: Use .find() to search for "SUMMER_50".
Then, use an if statement or an assertion to verify whether it was found or
if it returned undefined.
*/
const availableCoupons = ["WELCOME10", "FREESHIP", "WINTER20"];

const expCoopan = "SUMMER_50"
const coopan = availableCoupons.find(cpn => cpn === expCoopan);
console.log(coopan);
if (!coopan) {
    console.log("Coopan is not found! So no discount");
} else {
    ("Coopan is found! So discount is applicable");
} 