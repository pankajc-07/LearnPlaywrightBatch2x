function getToken() {
    return Promise.resolve("abc123");
}

// Playwright
// page.goto() => Promise ()
// await page.goto();

async function run() {
    let token = await getToken();
    console.log(token);
}

run();
console.log("**********************************************");
console.log("Example 01");

function passValue() {
    return Promise.resolve("This returns the value");
}

async function test01() {
    let result = await passValue();
    console.log(result);
}

test01();
console.log("**********************************************");
console.log("Example 02");

function passAPI() {
    return Promise.resolve("200 PASS");
}

async function test02() {
    let result = await passAPI();
    console.log(result);
}

test02();
console.log("**********************************************");
console.log("Example 03");

function passEntry() {
    return Promise.resolve("API: 200 pass")
}

async function test03() {
    let result = await passEntry();
    console.log(result);

}

test03();
