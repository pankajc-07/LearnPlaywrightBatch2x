// Exercise 4: Method Chaining with this
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }

    display() {
        console.log("Count:", this.count);
        return this;
    }
}

new Counter().increment().increment().increment().display();

console.log("***********************************************");

class Token {
    #value;

    constructor(val) {
        this.#value = val;
    }

    getToken() {
        return this.#value;
    }

    getMasked() {
        return "***" + this.#value.slice(-4);
    }
}

let t = new Token("abcdef1234");
console.log(t.getMasked());
console.log(t.getToken());
console.log(t.value);
