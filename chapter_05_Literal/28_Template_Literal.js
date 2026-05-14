// Template literal
let firstName = "Pankaj";
let fullName = `Hi ${firstName} Rao`;

console.log(firstName);
console.log(fullName);

let env = "staging";
env = "prod"
const userId = 12345;
const appUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(appUrl);


// Playwright
/* 
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click;
*/

// Logs
const testName = "Login test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);

// Screenshots
/*
const testCase = "checkout_flow";
const timeStamp = Date.now();
await page.screenshot({path: `screenshots/${testCase}_${timeStamp}.png`});
*/

// payload
/*
const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);
*/
console.log("************************");

let name01 = 'Pankaj';
let num01 = 246810;
var name02 = "India";
const num02 = 13579;

let sentence01 = `Hi ${name01} this is ${num01} my number and ${name02} is my country with code ${num02}`;
console.log(sentence01);
console.log("************************");

let env01 = 'Master';
let userId01 = 1234567;
let user01 = "admin";
let page01 = "Home";

let URL = `https://website.test/${env01}/${user01}/${page01}/${userId01}`;
console.log(URL);
console.log("************************");

let env02 = 'Stage';
let result02 = "PASS";
let time = Date.now();
console.log(time);

let screenShot02 = `Test is ${result02} on ${env02} server, and screenshot is "${env02}_${result02}_${time}.png"`;
console.log(screenShot02);


