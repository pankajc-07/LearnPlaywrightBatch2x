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
console.log("**********************************************");

console.log("Example 10");
/*
Scenario: You extract an array of 50 product names scraped from a search results page.
However, the UI only displays 10 items per page.

Your Task: Use .slice() to extract just the first 10 items from your master dataset
so you can write an assertion against the first page of the UI.
*/
let totalProducts = Array.from({ length: 50 }, (_, i) => `Product ${i + 1}`);
// Creates ["Product 1", "Product 2", ..., "Product 50"]
console.log(totalProducts);
console.log(totalProducts.slice(0, 10));
console.log("**********************************************");

console.log("Example 11");
/*
Scenario: You scrape all rows from a web table into an array of strings.
The array looks like this:
["Header: ID/Name", "Row 1: Alice", "Row 2: Bob",
"Row 3: Charlie", "Footer: Page 1 of 1"]

Your Task: Use .slice() to extract only the actual data rows (Row 1 through Row 3),
ignoring the first element (header) and the last element (footer),
regardless of how many data rows exist.
*/

let array11 = ["Header: ID/Name", "Row 1: Alice", "Row 2: Bob",
    "Row 3: Charlie", "Footer: Page 1 of 1"];
console.log(array11.slice(1, -1));
console.log("**********************************************");

console.log("Example 12");
/*
Scenario: An automation test requires you to verify a "Top 3 Trending Products"
sidebar widget.
You extract the full list of trending items from an API backend array containing 10 items.

Your Task: Extract the last 3 items from the backend array,
assuming the backend stores the highest-trending items at the very end of the array.
*/
let array12 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];
console.log(array12.slice(-3));
console.log("**********************************************");

console.log("Example 13");
/*
Scenario: You have a master list of 6 user profiles that need to be updated in a test
setup. To optimize your script, you want to split this master list into two equal halves
(chunks) so you can process them across two different browser contexts.

Your Task: Use .slice() dynamically to split this array exactly down the middle
into firstHalf and secondHalf.
*/

let array13 = ["User_A", "User_B", "User_C", "User_D", "User_E", "User_F"];
let midPoint = array13.length / 2;

console.log(array13.slice(0, midPoint));
console.log(array13.slice(midPoint));
