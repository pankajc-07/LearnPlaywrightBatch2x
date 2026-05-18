let pankaj_age = 20;
let pankaj_will_go_goa = pankaj_age > 18 ? "Yes, he will go" : "No, he will not go";
console.log(pankaj_will_go_goa);
console.log("**************************************");

let actualStatusCode = 200;
let expecytedStatusCode = 200;
let testResult = actualStatusCode === expecytedStatusCode ? "PASS" : "FAIL";
console.log(testResult);
console.log("**************************************");

let environment = "staging";
let baseUrl = environment === 'prod'
    ? "https://prod-api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);
console.log("**************************************");

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in : ", browserMode, " mode");
console.log("**************************************");

let responseTime = 850;
let sla = 1000;
let slaSttus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime} ms - ${slaSttus}`);
console.log("**************************************");

// condition ? true : false

let condition = true;
//let SKMale = condition ? true : false;
let SKMale = condition ? "Yes you are right" : "No you are wrong";
console.log(SKMale);
console.log("**************************************");

// Nested Ternary Operator
// Multiple conditions
// condition1 ? value1 : condition2 ? value2 : value3

let age = 26;
let is_pankaj_goa = age > 26 ? "Yes, he will go" : "No, he will not go";
console.log(is_pankaj_goa);
console.log("**************************************");

let age_pankaj = 26;
let is_pankaj_d = age_pankaj > 18 ? (age_pankaj > 24 ? "Drink" : "No drink") : "No goa";
console.log(is_pankaj_d);
console.log("**************************************");

let stsuscode = 404;
let category =
    stsuscode < 300 ? "Success" :
        stsuscode < 400 ? "Redirection" :
            stsuscode < 500 ? "Client Error" : "Server Error";
console.log(`status code: ${stsuscode} - category: ${category}`);
console.log("**************************************");

let a = 10;
let b = 20;
let c = 30;
let result = a > b ? "a is greater than b" :
    a > c ? "a is greater than c" :
        "a is the smallest";
console.log(result);
console.log("**************************************");

let temp = 11;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log(`Temperature: ${temp}°C - Feels: ${feel}`);
console.log("**************************************");

// Maximum of two numbers using nested ternary operator
let x = 20;
let y = 30;
let max = x > y ? "x is greater" : "y is greater";
console.log(max);
console.log("**************************************");

// Maximum of three numbers using nested ternary operator
let p = 10;
let q = 15;
let r = 80;
let result1 = p > q
    ? (p > r ? "p is greatest" : "r is greatest")
    : (q > r ? "q is greatest" : "r is greatest");
console.log(result1);
console.log("**************************************");

