// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);
console.log("****************************************");

//<ArrayName>.at()
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4)); //undefined
console.log("****************************************");

// Modify
statuses[1] = "blocked";
console.log(statuses);
console.log("****************************************");

// Practice Examples
console.log("Example 01");
let browser = ["chrome", "edge", "firfox", "safari"];
console.log(browser[3]);
console.log(browser[2]);
console.log(browser[0]);
console.log("****************************************");

console.log(browser.at(-1));
console.log(browser.at(-2));
console.log(browser.at(-3));
console.log(browser.at(-4));
console.log(browser.at(-5));
console.log("****************************************");

//Modify
browser[2] = "opera";
console.log(browser);
console.log("****************************************");

console.log("Example 02");
let array01 = [100, 200, 300, 400, 500];
console.log(array01[0]);
console.log(array01[5]);
console.log("****************************************");

console.log(array01.at(-2));
console.log(array01.at(-4));
console.log("****************************************");

// Modify
array01[0] = 700;
console.log(array01);
console.log("****************************************");

console.log("Example 03");
/*
Scenario: You are testing an activity log.
Every time you perform an action, a new log entry is pushed to the bottom of a list.
You need to verify that the very last action was logged correctly.

Your Task: Write a script that takes an array of log strings,
dynamically grabs the last item without hardcoding the index number,
and asserts that it matches "User updated profile".
*/
let array03 = ["Item01", "Item02", "Item03", "Item04", "Item05"];
let lastEntery = array03.at(-1);
console.log(lastEntery);
console.log("****************************************");

console.log("Example 04");
/*
Scenario: You fetch an array of text from a table of active users.
However, your test needs to ignore any system bots.

Your Task: Given an array of strings ['Alice', 'Bob', 'SYSTEM_BOT', 'Charlie'],
find where 'SYSTEM_BOT' is located and remove it from the array completely
using an array modification method.
*/
let array04 = ['Alice', 'Bob', 'SYSTEM_BOT', 'Charlie'];
// let remove = array04.splice(2, 1);
// console.log(remove);
// console.log(array04)

let ind01 = array04.indexOf("SYSTEM_BOT");
console.log(ind01);
let remove = array04.splice(ind01, 1);
console.log(remove);
console.log(array04)
console.log("****************************************");

console.log("Example 05");
/*
Scenario: You are building a test utility that queues up product IDs to buy.
You need to add a brand new promotional product ("PROMO_99")
to the front of the line so it gets tested first,
and a clearance item ("CLEAR_01") to the end of the line.

Your Task: Take an existing array ['PROD_01', 'PROD_02'].
Add "PROMO_99" to the beginning, add "CLEAR_01" to the end,
and then simulate processing the first item in line by removing it from the array and
saving it to a variable called itemUnderTest.
*/
let array05 = ['PROD_01', 'PROD_02'];
array05.unshift("PROMO_99");
array05.push("CLEAR_01");
console.log(array05);

let remove02 = array05.shift();
console.log(remove02);

console.log(array05);
console.log("****************************************");

console.log("Example 06");
/*
Scenario: Your Playwright test configuration file lists your testing environments as
['dev', 'staging', 'production'].
The team just replaced the staging environment with a new uat environment.

Your Task: Modify the array directly by targeting the specific index of
'staging' and overwriting it with 'uat'.
*/

let array06 = ['dev', 'staging', 'production'];
console.log(array06);

let replace01 = array06.splice(0, 1, "uat");
console.log(replace01);

console.log(array06);