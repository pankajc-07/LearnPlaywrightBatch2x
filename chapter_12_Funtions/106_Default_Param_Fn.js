function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login Test");
retry("Registeration Test", 5, 2000);
retry("Add to cart Test", 7);
console.log("*******************************************");

function test(name, min = 1, max, timeDelay = 500) {
    console.log(`Testing ${name} from ${min} to ${max} tries, ${timeDelay} ms time`);
}
test("Sign up");
test("Login", 2);
test("Logout", 3, 10);
test("Register", 2, 5, 2000);
console.log("*******************************************");

function navigateToPage(page, url, waitUntilState = 'networkidle') {
    console.log(`The current page is ${page} with ${url}, wait till ${waitUntilState}`);
}
navigateToPage("Add to cart");
navigateToPage("About us", "https//example.com");
navigateToPage("Contact details", "https//practice/website", 'networkIsFullyStable');
navigateToPage();
console.log("*******************************************");

function clickElement(page, selector, timeout = 5000) {
    return `${page}: ${selector} (${timeout} ms)`;
}
let result = clickElement("Login page : ", "abcd")
console.log(result);

let result01 = clickElement("Ragistration page : ", "xyz", "7000")
console.log(result01);





