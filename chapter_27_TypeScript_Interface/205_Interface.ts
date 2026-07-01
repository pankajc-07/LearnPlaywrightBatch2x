interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number; // Alternative syntax

}

//no type object
const noObject = {
    id: 1
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc);
console.log("*************************************");

interface Calculate {
    addition(a: number, b: number): number;
    subtraction(a: number, b: number): number;
    multiplication: (a: number, b: number) => number;
}

const cal: Calculate = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b
}

console.log(cal);

console.log(cal.addition(10, 20));
console.log(cal.subtraction(20, 10));
console.log(cal.multiplication(5, 2));

