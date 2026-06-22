//You need to create a class with the static and non-static methods as well as variables.
// It will be a simple class of our Playwright 2x batch.
// You will be also printing out the students. Create 10 objects of students and print them.
// Also create a print method.

class Students {

    static course = "Playwright 2x batch";

    constructor(name) {
        this.name = name;
    }

    m1() {
        console.log(`Name of the student is : ${this.name}`);
    }
    static m2() {
        console.log(`***${this.course}***`);
    }
}

Students.m2();

let s1 = new Students("Pankaj")
let s2 = new Students("Virat")
let s3 = new Students("Sam")
let s4 = new Students("Veer")
let s5 = new Students("Ian")
let s6 = new Students("Charlie")
let s7 = new Students("George")
let s8 = new Students("Julia")
let s9 = new Students("Alice")
let s10 = new Students("Bob")

s1.m1();
s2.m1();
s3.m1();
s4.m1();
s5.m1();
s6.m1();
s7.m1();
s8.m1();
s9.m1();
s10.m1();


