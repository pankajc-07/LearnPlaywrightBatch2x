let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

delete config.browser;
console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}
console.log("*******************************************************");

// Following give Error
let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
};
console.log(config2);
console.log("*******************************************************");

// Correct representation
let config3 = {
    browser: "chrome",
    timeout: 3000,
    testname: "login test"
};
console.log(config3);

config3.browser = "safari";
console.log(config3);

delete config3.browser
console.log(config3);

if (config3.browser === "chrome") {
    console.log("I will execute my TC");
} else {
    console.log("Chrome is not available");
}
console.log("*******************************************************");
let config4 = {};
config4.browser = "Edge";
config4.time = 500;
config4.name = "Registration page";
config4.suiteName = "Regresssion";

console.log(config4);

config4.time = 700;

console.log(config4);

if (config4.browser === "chrome") {
    console.log("I will execute my TC");
} else {
    console.log("Chrome is not available");
}

if (config4.time === 700) {
    console.log("I will execute my TC");
} else {
    console.log("Time is diffrent");
}
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")

let config05 = {};
config05.testname = 'automation';
config05.browser = "chrome";
config05.API = "NA";
config05.tool = "playwright";
config05.responseTime = 60000;
config05.suiteTime = 100000;

console.log(config05);

delete config05.API;

console.log(config05);

config05.responseTime = 5000;
console.log(config05);

//Following is allowed
// if (config05.responseTime <= 4000) {
//     //console.log("Response time is within the range and value = " + config05.responseTime);
//     console.log(`Response time : ${config05.responseTime} is within the given time limit`);
// } else {
//     //console.log("Response time is out of the range and value = " + config05.responseTime);
//     console.log(`Response time : ${config05.responseTime} is out of the given time limit`);
// }

//This is also allowed
const maxAllowedTime = 4000;
if (config05.responseTime <= maxAllowedTime) {
    //console.log("Response time is within the range and value = " + config05.responseTime);
    console.log(`Response time : ${config05.responseTime} is within the given time limit and the limit is : ${maxAllowedTime}`);
} else {
    //console.log("Response time is out of the range and value = " + config05.responseTime);
    console.log(`Response time : ${config05.responseTime} is out of the given time limit and the limit is : ${maxAllowedTime}`);
}

config05.API = 'True';
config05.apiResponse = 200;
console.log(config05);

if (config05.apiResponse <= 299) {
    console.log(`API response is sucessfull with ${config05.apiResponse} response code`);
} else {
    console.log(`API response is fail with ${config05.apiResponse} response code`);

}

