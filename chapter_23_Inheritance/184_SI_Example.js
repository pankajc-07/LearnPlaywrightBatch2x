class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); //. It is used for the parent constructor. 
        this.breed = breed;
    }

    bark() {
        console.log(this.name, " is barking!")
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();

console.log(dog.breed);
console.log(dog.name);
console.log("**************************************************");

// Practice Examples
console.log("Example 01");
/*
Example 1: Vehicle $\rightarrow$ CarGreat for practicing how a specific vehicle inherits general transportation properties.
*/
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} engine started`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving`);
    }
}

let myCar = new Car("Toyota", "Corolla");
myCar.start();
myCar.drive();

console.log(myCar.brand);
console.log(myCar.model);
console.log("**************************************************");

console.log("Example 02");
/*
Example 2: Employee  => ManagerPerfect for simulating corporate or user-role structures.
*/
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Manger extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    meet() {
        console.log(`${this.name} is leading a meeting for ${this.department}`);
    }
}

let mgr = new Manger("Alice", 100000, "QA");
mgr.work(); // Output: Alice is working
mgr.meet(); // Output: Alice is leading a meeting for QA

console.log(mgr.name);       // Output: Alice
console.log(mgr.salary);     // Output: 90000
console.log(mgr.department); // Output: QA
console.log("**************************************************");

console.log("Example 03");
/*
Example 3: Product => ElectronicIdeal for e-commerce logic where categories have unique specifications.
*/
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    dissplayDetails() {
        console.log(`${this.title} costs $${this.price}`);
    }
}

class Electronics extends Product {
    constructor(title, price, warrantyMonths) {
        super(title, price);
        this.warrantyMonths = warrantyMonths;
    }

    checkWarranty() {
        console.log(`Warranty valid for ${this.warrantyMonths} months`);
    }
}

let laptop = new Electronics("Laptop", 70000, 24);
laptop.dissplayDetails();
laptop.checkWarranty();
console.log("**************************************************");

console.log("Example 04");
/*
Example 4: Person => StudentA standard computer science example for practicing base human profiles.
*/
class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying for grade ${this.grade}`);
    }
}

let student = new Student("Sam", "A+");
student.greet();
student.study();
console.log("**************************************************");

console.log("Example 05");
/*
Example 5: User => AdminExcellent for access control, web development, and membership frameworks.
*/
class User {
    constructor(username) {
        this.username = username;
    }

    login() {
        console.log(`${this.username} logged in`);
    }
}

class Admin extends User {
    constructor(username, adminLevel) {
        super(username);
        this.adminLevel = adminLevel;
    }

    deleteUser(targetUser) {
        console.log(`${this.username} (Level ${this.adminLevel}) deleted user: ${targetUser}`);
    }
}

let admin = new Admin("SuperAlex", 5);
admin.login();
admin.deleteUser("JohnDoe");