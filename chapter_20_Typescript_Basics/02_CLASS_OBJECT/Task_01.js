// You need to create a class with the name of Calculator
// where you will have different methods available for some subtraction, modulus, division, and multiplication.
// What will happen is you will basically create an object with the two variables.
// You will basically give the output of some subtraction, modulus, division, and multiplication. 

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    addition() {
        return this.num1 + this.num2;
    }

    subtraction() {
        return this.num1 - this.num2;
    }

    modulus() {
        return this.num1 % this.num2;
    }

    division() {
        return this.num1 / this.num2;
    }

}

let numbers = new Calculator(5, 2);
console.log(numbers.addition());
console.log(numbers.subtraction());
console.log(numbers.modulus());
console.log(numbers.division());


