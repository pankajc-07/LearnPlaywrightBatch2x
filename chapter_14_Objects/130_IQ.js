const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// Dynamic property access
const key = "age";
console.log(user[key]);

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);

// Following is not going to use
let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
const user01 = {
    name: 'Pankaj',
    age: 27,
    country: "India",
    number: 2468,
    email: "pankaj@example.com"
}

console.log(user01);
console.log(user01.number);
console.log(user01['email']);

const emailAddress = 'email';
console.log(user01[emailAddress]); // This is correct
console.log(user01.emailAddress); // This is not correct, this will return undefined

user01.number = 13579;
user01.city = "Pune";
console.log(user01);








