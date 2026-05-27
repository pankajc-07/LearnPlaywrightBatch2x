// Slicing & Combining
// let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

// console.log(arr.slice(1, 3)); // ( start, end-1) 

// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, 5));

// console.log(arr.slice(2));

//start from the -1 and till 2. 
// console.log(arr.slice(-2));

// console.log(arr.slice(0));

// let arr = [10, 20, 30, 40, 50];
// let s = arr.slice(1, 4);   // [20, 30, 40]
// console.log(arr);
// console.log(s);

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30]
console.log(arr);
console.log("**********************************************");

// Practice Examples
console.log("Example 01");
let num01 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let r = num01.slice(2, 3);//33
console.log(r);
console.log("**********************************************");

console.log("Example 02");
let num02 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let p = num02.slice(3, 6);//8,10,12
console.log(p);
console.log("**********************************************");

console.log("Example 03");
let num03 = [1, 3, 5, 7, 9];
console.log(num03.slice(2));
console.log("**********************************************");

console.log("Example 04");
let num04 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(num04.slice(-2));
console.log("**********************************************");

console.log("Example 05");
let num05 = [1, 3, 5, 7, 9];
console.log(num05.slice(-3));
console.log("**********************************************");

console.log("Example 06");
let str01 = ["AAA", "BBB", "CCC", "DDD"];
console.log(str01.slice(1, 2));
console.log("**********************************************");

console.log("Example 07");
let str02 = ["AA", "BB", "CC", "DD"];
console.log(str02.slice(1, 6));
console.log("**********************************************");

console.log("Example 08");
let str03 = ["AAAA", "BBBB", "CCCC", "DDDD"];
console.log(str03.slice(2));
console.log("**********************************************");

console.log("Example 09");
let str04 = ["PP", "QQ", "RR", "SS"];
console.log(str04.slice(-3));