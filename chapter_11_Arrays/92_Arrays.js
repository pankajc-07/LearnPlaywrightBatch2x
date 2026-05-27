// Soting in Arrays
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// Natural Sorting, lexicographic Sorting)
let number = [3, 1, 4];
number.sort()
console.log(number);

// Natural Sorting, lexicographic Sorting
let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);

// Sorting
nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a); // Dessending
console.log(nums);
console.log("**********************************************");

// Practice Examples
console.log("Example 01");
let marks = [11, 22, 100, 1, 2, 21];
marks.sort(); // Natural Sorting, lexicographic Sorting
console.log(marks)

marks.sort((p, q) => p - q);  // Ascending
console.log(marks)

marks.sort((x, y) => y - x); // Dessending
console.log(marks)
console.log("**********************************************");

console.log("Example 02");
/*
Scenario: You are automating an e-commerce site.
You click the "Sort by Price: Low to High" button.
You scrape the prices from the UI, which gives you an array of strings:
["$10.50", "$5.00", "$100.00", "$25.99"].

Your Task: Write a JavaScript function to sort this array correctly
so you can compare it against the UI. Hint: Standard alphabetical sorting
will fail here because of the "$" and how numbers are treated as strings
*/
let price = ["$10.50", "$5.00", "$100.00", "$25.99"];
price.sort((x, y) => x.replace('$', '') - y.replace('$', ''));
console.log(price);
console.log("**********************************************");

console.log("Example 03");
/*
Scenario: You have a table of invoices.
You extract the dates from the "Due Date" column into an array:
["2026-05-12", "2025-11-30", "2026-01-15"].

Your Task: Sort these dates in descending order (latest date first)
so you can verify if the UI's "Newest First" filter actually works.
*/

let dates = ["2026-05-12", "2025-11-30", "2026-01-15"];
dates.sort((a, b) => new Date(a) - new Date(b));
console.log(dates);
console.log("**********************************************");

console.log("Example 04");
/*
Scenario: You scrape a list of brand names from a dropdown that is supposed to be
sorted alphabetically: ["apple", "Banana", "cherry", "Apricot"].

Your Task: Sort this array alphabetically in a case-insensitive manner.
(If you use a default .sort(), uppercase letters like "Banana" will unexpectedly
jump ahead of lowercase letters like "apple" due to ASCII values).
*/
let fruits01 = ["apple", "Banana", "cherry", "Apricot"];
fruits01.sort((a, b) => a.localeCompare(b));
console.log(fruits01);
console.log("**********************************************");

console.log("Example 05");
/*
Scenario: You extract an array of product objects from a page.
Each object has a name, price, and inStock boolean.

Your Task: Sort the array so that all inStock: true items come first,
and within those items, they are sorted by price from lowest to highest.
*/

let products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 200, inStock: false }
];

// products.sort((a, b) => {
//     if (a.inStock !== b.inStock) {
//         return a.inStock ? -1 : 1;
//     }
//     return a.price - b.price;
// });

products.sort((a, b) => (b.inStock - a.inStock) || (a.price - b.price));
console.log(products);

