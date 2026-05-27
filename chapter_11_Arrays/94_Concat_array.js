// Concatenation in Arrays
let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);
console.log("**********************************************");

// Practice Examples
console.log("Example 01");
let p = [2, 4, 6, 8];
let q = [1, 3, 5, 7];

let r = p.concat(q);
console.log(r);

let s1 = p.concat(p);
console.log(s1);

let s2 = q.concat(p);
console.log(s2);

let x1 = [...p, ...q];
console.log("This is spread (modern way) : " + x1);

let x2 = [...p, ...p];
console.log("This is spread (modern way) : " + x2);
console.log("**********************************************");

console.log("Example 02");
let p1 = ["A", "B", "C", "D"];
let q1 = ["P", "Q", "R", "S"];

let s3 = p1.concat(q1);
console.log(s3);

let s4 = p1.concat(p1);
console.log(s4);

let s5 = q1.concat(q1);
console.log(s5);

let s6 = q1.concat(p1);
console.log(s6);
console.log("**********************************************");

console.log("Example 03");
let p11 = ["A", "B", "C", "D"].join("|");
console.log(p11);
console.log("**********************************************");

console.log("Example 03");
let p12 = [2, 4, 6, 8].join("|");
console.log(p12);