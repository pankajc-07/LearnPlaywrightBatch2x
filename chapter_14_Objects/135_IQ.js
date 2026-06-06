const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = { name: "John", age: 30 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// We are not going to use get and set in Playwrite code
// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// We are not going to use get and set in Playwrite code
// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
let user01 = {
    name: 'ABCD',
    age: 29,
    number: 13579,
    city: 'xyz',
    email: "sbcd@example.com"
}

console.log(Object.keys(user01));
console.log(Object.values(user01));
console.log(Object.entries(user01));
console.log("*******************************************************");

console.log("Example 02")
const user02 = { name: 'Musk', age: 29, country: 'USA' };

for (const key in user02) {
    console.log(`${key}: ${user02[key]}`)
}
