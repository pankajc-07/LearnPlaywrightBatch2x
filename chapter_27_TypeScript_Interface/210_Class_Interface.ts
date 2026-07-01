interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log("[RUN] " + this.name);
    }

    getStatus(): string {
        return "PASS";
    }
}

let tc = new TestCase("Verify login redirect");
tc.run();
tc.getStatus();
console.log("**********************");

console.log(tc.run());
console.log("**********************");

console.log(tc.getStatus());


