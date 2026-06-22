class Car {
    // CAB
    //  Constructor. 
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }
    // Attribute 
    // Behavior. 
    drive() {
        console.log("i am driving", this.name);
    }
}

const tesla = new Car("Model S");
tesla.drive();

const i10 = new Car("grand i 10");
i10.drive();
console.log("*****************************************");

console.log("Example 01");
class Country {
    constructor(name, state, city) {
        this.name = name;
        this.state = state;
        this.city = city
    }

    location() {
        console.log(`Hi my name is ${this.name}, I am from city ${this.city} from state ${this.state}`);
    }
}

let name1 = new Country("Pankaj", "Mararashtra", "Pune");
let name2 = new Country("Virat", "North", "Delhi");
name1.location();
name2.location();

