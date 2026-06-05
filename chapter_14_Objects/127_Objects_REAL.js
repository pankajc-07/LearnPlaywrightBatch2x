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


