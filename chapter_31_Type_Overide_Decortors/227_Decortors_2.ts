function logged(originalMethod: any, context: any): any {
    return function (this: any, ...args: any[]): any {
        console.log("called decorator");
        return originalMethod.call(this, ...args);
    };
}

class Greeter {

    @logged
    hello(): string {
        return "Hi";
    }
}

let r = new Greeter().hello();
console.log(r);
console.log("*************");

let p = new Greeter();
console.log(p.hello());
console.log("*****************************************");

//Practice Examples
console.log("Example 01");
function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("This is from above functions");
    console.log("Method name:", propertyKey);
}

class Greet {
    @logger
    hi(): string {
        return "heloooooo";
    }
}

let p1 = new Greet();
console.log(p1.hi());

