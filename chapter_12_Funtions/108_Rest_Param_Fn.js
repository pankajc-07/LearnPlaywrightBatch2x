// Rest of the param.
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");
console.log("*****************************************");

function test01(testName, ...results) {
    console.log(testName);
    console.log(results);
}

test01('Login', 2, 4, 6, 8, 10);
test01('Register', "pass", "fail", "pass", "no run", "error", "API not returned");
console.log("*****************************************");

function test02(testName = "Unnamed Test", ...results) {
    console.log(`Test: ${testName}`);
    console.log(`Results gathered:`, results);
}
test02("API", "pass", "no run", "API issue", "success");
test02();
console.log("*****************************************");

