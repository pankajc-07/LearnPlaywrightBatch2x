const { use } = require("react");

class ICICI {
    #balance; // # means private in JS, In Typescript - private

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let pramod = new ICICI("Prrammod", 1000);
console.log(pramod.getBalance());
pramod.setBalance(10000000, false);
console.log(pramod.getBalance());
console.log("============");
let pramod_father = new ICICI("Pramod", 2000);
console.log(pramod_father.getBalance());
pramod_father.setBalance(300000, true);
console.log(pramod_father.getBalance());
console.log("**************************************************");

// Practice Examples
console.log("Example 01");
/*
Example 1: Digital Thermostat (Data Validation)Scenario: Create a Thermostat class where the temperature is kept private.
It should only allow setting the temperature between $15^\circ\text{C}$ and $30^\circ\text{C}$ to prevent overheating or freezing.
*/

class Thermostat {
    #currentTemprature;

    constructor(initialTemprature) {
        this.#currentTemprature = initialTemprature;
    }

    // Getter to view temperature
    getTemprature() {
        return this.#currentTemprature;
    }

    // Setter with validation rules
    setTemprature(newTemp) {
        if (newTemp >= 15 && newTemp <= 30) {
            this.#currentTemprature = newTemp;
            console.log(`Temprature updated to ${this.#currentTemprature}°C`);
        } else {
            console.log("Error: Temperature must be between 15°C and 30°C.");
        }
    }
}

const temp01 = new Thermostat(22);
console.log(temp01.getTemprature());
temp01.setTemprature(41);
temp01.setTemprature(21);
console.log("**************************************************");

console.log("Example 02");
/*
Example 2: Employee Payroll (Role-Based Access)
Scenario: Create an Employee class where the salary is hidden.
Only a user with the role of "HR" should be allowed to update the salary.
*/

class Employee {
    #salary;
    constructor(name, initialSalary) {
        this.name = name;
        this.#salary = initialSalary;
    }

    getSalary() {
        return this.#salary;
    }

    updateSalary(newSalary, role) {
        if (role === "HR") {
            this.#salary = newSalary;
            console.log("Salary updated successfully.");
        } else {
            console.log("Access Denied: Only HR can update salaries.");
        }
    }
}

const emp01 = new Employee("Bob", 50000);
console.log(emp01.name);
console.log(emp01.getSalary());
emp01.updateSalary(70000, "Devloper");
emp01.updateSalary(90000, "HR");
console.log(emp01.getSalary());
console.log("**************************************************");

console.log("Example 03");
/*
Example 3: Smart Lock (State Control)
Scenario: Build a SmartLock class where the isLocked state is private.
Users cannot toggle it directly; they must provide a matching 4-digit passcode to unlock it.
*/

class SmartLock {
    #isLocked = true;
    #passcode;

    constructor(setupPasscode) {
        this.#passcode = setupPasscode;
    }

    getLockStatus() {
        return this.#isLocked ? "Locked 🔒" : "Unlocked 🔓";
    }

    unlock(enteredPasscode) {
        if (enteredPasscode === this.#passcode) {
            this.#isLocked = false;
            console.log("Door unlocked successfully.");
        } else {
            console.log("Incorrect passcode! Alarm triggered.");
        }
    }
    lock() {
        this.#isLocked = true;
        console.log("Door locked.");
    }
}

const frontDoor = new SmartLock(1234);
frontDoor.unlock(9999); // Incorrect passcode!
frontDoor.unlock(1234); // Door unlocked successfully.
console.log(frontDoor.getLockStatus()); // Unlocked 🔓
console.log("**************************************************");

console.log("Example 04");
/*
Example 4: E-Commerce Cart (Read-Only Total Calculation)
Scenario: Create a ShoppingCart class. The internal items array should be hidden so users don't manually mess up the array.
The total should be calculated internally without letting users overwrite it directly.
*/
class ShoppingCart {
    #items = [];
    #totalPrice = 0;

    addItem(itemName, price) {
        this.#items.push({ itemName, price });
        this.#totalPrice += price;
        console.log(`${itemName} added to cart.`);
    }

    getTotal() {
        return this.#totalPrice
    }

    getItemsCount() {
        return this.#items.length;
    }
}

const myCart = new ShoppingCart();
myCart.addItem("Laptop", 1200);
myCart.addItem("Mouse", 27);
console.log(`Total items: ${myCart.getItemsCount()}`); // Total items: 2
console.log(`Grand Total: $${myCart.getTotal()}`);     // Grand Total: $1227
// myCart.#totalPrice = 0; -> Throws a SyntaxError (Data is perfectly safe!)
console.log("**************************************************");

console.log("Example 05");
/*
Example 5: User Profile Authenticator (Token Hiding)
Scenario: Build a UserProfile class that stores a user's database userId and a private sessionToken.
The session token should never be exposed in plain text via getters,
but a method validateSession should check if a token is valid.
*/
class UserProfile {
    #sessionToken;

    constructor(username, token) {
        this.username = username;
        this.#sessionToken = token;
    }

    // Instead of leaking the token, we provide a verification service
    validateSession(tokenToTest) {
        return this.#sessionToken === tokenToTest;
    }
}

const user = new UserProfile("dev_pankaj", "secreate_abc_1234");
console.log(user.username);

// // Practice Execution
const isValid = user.validateSession("wrong_token");
console.log(`Is session valid? ${isValid}`); // false

const isStrictlyValid = user.validateSession("secret_jwt_abc123");
console.log(`Is session valid? ${isStrictlyValid}`); // true
