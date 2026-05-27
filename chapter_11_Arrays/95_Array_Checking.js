// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);
console.log("*****************************************");

// every & some in Arrays
console.log([80, 90, 85].every(s => s >= 70)); // true
console.log([80, 60, 85].every(s => s >= 70)); // false
console.log("*****************************************");

// Playwright API 
console.log([200, 201, 203].every(statuscode => statuscode > 200));
console.log("*****************************************");

// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70)); // true
console.log([80, 90, 85].some(s => s < 70)); // false
console.log("*****************************************");
//arrow : s => s >= 70