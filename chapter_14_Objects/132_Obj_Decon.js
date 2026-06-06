
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
// const { name1, age } = user;
// console.log(name1);
// console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// destructuring
const { age } = user;

// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

// const { user: { address: { city } } } = data;

console.log(data.user.address.city);
console.log(data.user.name);
console.log(data.user);
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")

const user01 = {
    name: 'Pankaj',
    age: 27,
    city: 'Pune',
    number: 123456789
}
console.log(user01);

// Rename variables
const { name: userName, age: userAge, city: userCity, number: userNumber } = user01

console.log(userName);
console.log(userAge);
console.log(userCity);
console.log(userNumber);

console.log(user01.name); // This is correct
console.log(user01.userName); // This is not correct, this will give value = undefined

// destructuring
const { city } = user01;

// Default values
const { country = "USA" } = user01;
console.log(country);
console.log(user01);

const data01 = {
    user:
    {
        name: 'pankaj',
        address: {
            city: 'Pune',
            number: {
                mobileNumber: 2468
            }
        }
    }
}

console.log(data01);
console.log(data01.user);
console.log(data01.user.address);
console.log(data01.user.address.number);

