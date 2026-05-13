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