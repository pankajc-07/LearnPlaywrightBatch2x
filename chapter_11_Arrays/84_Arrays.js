// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

console.log(browsers);
console.log("*************************************");

// Array constructor

let scores = new Array(3);// here the 3 is length
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
scores[3] = 11;
console.log(scores);

console.log("*************************************");

let scores2 = new Array(1, 2, 3);
console.log(scores2);
console.log("*************************************");

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);
console.log("*************************************");

// Array.of()
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);
console.log("*************************************");

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);
console.log("*************************************");

// let numbers1 = Array.from("123456789");
// console.log(numbers1);
console.log("*************************************");

//Prctice Examples
console.log("Example 01");
let array01 = ["ball", "bat", "stumps", "bells"];
console.log(array01);
console.log("*************************************");

console.log("Example 02");
let array02 = new Array(4);
array02[0] = "apple";
array02[1] = "banana";
array02[2] = "cherry";
array02[3] = "mango";
array02[4] = "watermellon";
array02[5] = "grapes";
array02[6] = "aneer";
array02[7] = "pineapple";
console.log(array02);
console.log("*************************************");

console.log("Example 03");
let array03 = new Array("First", "second", "third", "fourth", "fifth");
console.log(array03);
console.log("*************************************");

console.log("Example 04");
let array04 = Array.of(11, 22, 33, 44, 55);
console.log(array04);
console.log("*************************************");

console.log("Example 05");
let array05 = Array.from("Hi how are you?");
console.log(array05);
console.log("*************************************");
