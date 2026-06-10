function test(testName, callback) {
    console.log(testName);
    callback();
}

// import { test } from '@playwright/test';

test("Verify Login page is working", () => {
    // Write your Playwright Code//.
});
console.log("*******************************************************");

// Practice Examples
console.log("Example 01");
function test01(name, callback) {
    console.log(name);
    callback();
}

test01("Sanity test", function () {
    console.log("We have started with this!");
})

test01("Functional testing", () => {
    console.log("Now we are doing this");
})
