let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());
console.log("**********************");

//Practice Examples
console.log("Example 01");
let marks = [60, 70, 65, 77, 86, 80, 95, 90];
let result = marks.map(p => p >= 70 ? "pass" : "fail")
console.log(result);
console.log("**********************");

let filter01 = marks.filter(p => p > 70);
console.log(filter01);
console.log("**********************");

let reduce01 = marks.reduce((p, q) => p + q, 0);
console.log(reduce01);
console.log("**********************");

let reduce02 = marks.reduce((p, q) => p * q, 1);
console.log(reduce02);
console.log("**********************");

let reduce03 = marks.reduce((p, q) => p - q, 0);
console.log(reduce03);
console.log("**********************");

let reduce04 = marks.reduce((p, q) => p / q, 1);
console.log(reduce04);
console.log("**********************");

let nested01 = [[10, 20], [30], 40, 50, [60, 70], [80], 90];
console.log(nested01.flat());

