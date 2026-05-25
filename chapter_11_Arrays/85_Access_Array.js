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