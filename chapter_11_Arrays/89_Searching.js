let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
console.log(results.indexOf("fail")); //1
console.log("********************************")

console.log(results.indexOf("skip")); // -1
console.log("********************************")

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail"));    // 4
console.log("********************************")

// includes — returns boolean
console.log(results.includes("error")); // true
console.log("********************************")

console.log(results.includes("skip"));       // false
console.log("********************************")


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);
console.log("********************************")

// findIndex
let p = nums.findIndex(n => n > 20); // 1, 2, 3
console.log(p);
console.log("********************************")

let q = nums.findLast(n => n > 20); // 45] 
console.log(q);
console.log("********************************")

let s = nums.findLastIndex(n => n > 20);// 3
console.log(s);
console.log("********************************")

//Practice examples
console.log("Example 01");
let browser = ["chrome", "edge", "firefox", "chrome", "opera", 'edge', "safari"];

console.log(browser.indexOf("chrome"));//0
console.log(browser.indexOf("edge"));//1
console.log(browser.indexOf("IE"));//-1

console.log(browser.lastIndexOf("edge"));//5
console.log(browser.lastIndexOf("chrome"));//3

console.log(browser.includes("IE"));//false
console.log(browser.includes("safari"));//true

console.log("********************************")

console.log("Example 02");
let responseAPI = [200, 404, 300, 200, 404, 500];

let a = responseAPI.find(x => x > 200);
console.log(a);//404

let b = responseAPI.findIndex(x => x > 400);
console.log(b);//1

let c = responseAPI.findLastIndex(x => x < 300);
console.log(c);//3

let d = responseAPI.findLast(x => x > 200);
console.log(d);//500






