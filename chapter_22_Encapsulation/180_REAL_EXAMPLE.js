class Person {
    // Hide you childs
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}

let p = new Person("Pramod", "Vrad", "Jenny");
console.log(p.name);
// console.log(p.#child1);
console.log(p.getChild1());
console.log("**************************************");

console.log("Practice Example 01");

class Person01 {
    #kid01

    constructor(name, kidname) {
        this.name = name;
        this.#kid01 = kidname;
    }

    getkid01() {
        return this.#kid01;
    }

    setkid01(new_name) {
        this.#kid01 = new_name
    }
}

let p01 = new Person01("Virat", "Son");
console.log(p01.name);
// p01.setkid01("Son02") // Try with this and without this
console.log(p01.getkid01());




