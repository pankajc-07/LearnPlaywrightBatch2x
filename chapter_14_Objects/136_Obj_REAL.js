const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}
console.log(ENV);

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}
console.log(EXPECTED_RESPONSE);


const config = {
    // Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',

    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123',
    },

    // Logging
    logLevel: 'INFO',

    // Retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};

console.log(config);
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
// A standard object literal representing a user
const userProfile = {
    username: "coder_99",
    age: 27,
    isPremium: true,
    languages: ["JavaScript", "Python"],

    // A method inside the object
    greet() {
        console.log(`Hello, my name is ${this.username}!`);
    }
};

// Accessing properties and methods
console.log(userProfile.username); // "coder_99"
userProfile.greet();               // "Hello, my name is coder_99!"
console.log(userProfile);
console.log("*******************************************************");

console.log("Example 02")
// 'document' is a built-in object provided by the browser environment
const submitButton = document.getElementById("submit-btn");
const allParagraphs = document.querySelectorAll("p");

// Modifying the page using the object's properties and methods
submitButton.textContent = "Click Me!";
submitButton.style.backgroundColor = "blue";
console.log("*******************************************************");

console.log("Example 03")
//Following is the JSON object
const serverResponse = '{"id": 101, "status": "success"}';

// JSON.parse() is a method on the global JSON object
const dataObject = JSON.parse(serverResponse);
console.log(dataObject.id); // 101

// Turning a JS object back into a string to send to a database
const backToString = JSON.stringify(dataObject);
console.log("*******************************************************");

console.log("Example 04")
// Creating a new instance of the Date object
const today = new Date();

console.log(today.getFullYear()); // e.g., 2026
console.log(today.toDateString()); // e.g., "Sat Jun 06 2026"

// Formatting a specific date object
const independenceDay = new Date("2026-07-04");
console.log("*******************************************************");

console.log("Example 05")
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        return `${this.brand} is now going ${this.speed} mph.`;
    }
}

// Creating unique object instances from the Car class
const myCar = new Car("Tesla", 60);
const friendsCar = new Car("Ford", 45);

console.log(myCar.accelerate()); // "Tesla is now going 70 mph."

