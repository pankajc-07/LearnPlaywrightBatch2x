/*
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
*/

// Practice Examples Ternary Operator
/*
console.log("Prctice Examples 01");
let time = 9;
let office = time > 8.30 ? "Office is open" : "Office is closed";
console.log(office);
console.log("**************************************");

console.log("Prctice Examples 02");
let day01 = "Monday";
let day02 = "Wednesday";
let officeDay = day01 === "Monday" ? "Office day" :
    day02 === "Tuesday" ? "Office day" : "Work from home";
console.log(officeDay);
console.log("**************************************");

console.log("Prctice Examples 03");
let age01 = 21;
let isAdult = age01 >= 18 ? "Yes" : "No";
console.log(isAdult);
console.log("**************************************");

console.log("Prctice Examples 04");
let ticket = 1000;
let money = 1000;
let travel = ticket <= money ? "Yes, you can travel" : "No, you cannot travel";
console.log(travel);
console.log("**************************************");

console.log("Prctice Examples 05");
let day = "Sunday";
let movie = "Sunday";
let check = day === movie ? "Lets's Go" : "No go";
console.log(check);
console.log("**************************************");

console.log("Prctice Examples 06");
let rain = true;
let car = rain ? "Use car" : "Use bike";
console.log(car);
console.log("**************************************");

console.log("Prctice Examples 07");
let speed = 80;
let speedStatus = speed >= 70 ? "Over speed" : "Under speed";
console.log("You are driving with: ", speedStatus, "and your speed is", speed, "km/h");
console.log("**************************************");
*/

// Practice Examples Ternary Operator - Nested
console.log("Prctice Examples 01");
let m_age = 21;
let movie_status = m_age >= 18 ?
    (m_age > 21 ? "You can watch all movies" : "You can watch only U/A movies") : "You cannot watch movies";
console.log(movie_status);
console.log("**************************************");

console.log("Prctice Examples 02");
let money = 4001;
let rich =
    money < 1000 ? "Poor" :
        money < 2000 ? "Middle class" :
            money < 3000 ? "Upper Middle class" :
                money < 4000 ? "Rich" : "Very Rich";
console.log("Person is :", rich, "with money of = ", money);
console.log("**************************************");

// Need to chek this example again
console.log("Prctice Examples 03");
let a = 90;
let b = 50;
let c = 70;
let result =
    a > b ? "a is greater than b" :
        a > c ? "a is greater than c" :
            "a is the smallest";
console.log("Your grade is: ", result);
console.log("**************************************");

console.log("Prctice Examples 04");
let time = 7;
let long_W_H = (time >= 8) ? "Very Long" :
    (time >= 6) ? "Long" :
        (time >= 4) ? "Okay" :
            (time >= 3) ? "Good" : "Great";
console.log("Working Hrs are : ", long_W_H, "with time of = ", time, "hrs");
console.log("**************************************");

console.log("Prctice Examples 05");
let x1 = 100;
let y1 = 500;
let z1 = 300;
let max = x1 > y1
    ? (x1 > z1 ? "x1 is greater" : "z1 is greater")
    : (y1 > z1 ? "y1 is greater" : "z1 is greater");
console.log("Maximum value is: ", max);
console.log("**************************************");

console.log("Prctice Examples 06");
let time05 = 11;
let result05 = time05 < 3 ? "Very short " :
    time05 < 5 ? "Short" :
        time05 < 7 ? "Long" :
            time05 < 10 ? "VeryLong" : "Toooooo Long";

console.log(result05);
