class Car {
    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());
console.log("**************************************");

console.log("Practice Example 01");

class Vehicle {
    #type
    constructor(name, vType) {
        this.name = name;
        this.#type = vType;
    }

    getType() {
        return this.#type;
    }

    setType(newType) {
        this.#type = newType;
    }
}

let v1 = new Vehicle("Creata", "car")
console.log(v1.name);
console.log(v1.getType());
v1.setType("Plane")
console.log(v1.getType());
