function beforeSomething(method: any) {
    return function () {
        console.log("EAT");
        return method();
    };
}

function BeforeSomeSomeThing(method: any) {
    return function () {
        console.log("SLEEP");
        return method();
    };
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);
console.log("*****************");
let p = new Dog();
console.log(p);
console.log("*****************************************");

//Practice Examples
console.log("Example 01");
function time(originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`[Timer] ${context.name || 'Method'} took ${(end - start).toFixed(2)}ms`);
        return result;
    };
}

class HeavyCalculation {
    @time
    processData() {
        let sum = 0;
        for (let i = 0; i < 10_000_000; i++) {
            sum += i;
        }
        return sum;
    }
}

const calc = new HeavyCalculation();
calc.processData(); // Logs: [Timer] processData took X.XXms
console.log("*****************************************");

console.log("Example 02");
function logger(originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
        console.log(`[LOG] Calling system method: ${context.name} with args:`, args);
        return originalMethod.apply(this, args);
    };
}

class UserService {
    @logger
    createUser(username: string, role: string) {
        return { id: 99, username, role };
    }
}

const service = new UserService();
service.createUser("Nihit", "Admin");
console.log("*****************************************");

console.log("Example 03");
// Simulated global user state
const currentUser = { name: "Alice", role: "guest" };

function adminOnly(originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
        if (currentUser.role !== "admin") {
            throw new Error(`[Auth Error] Access denied to ${context.name}. Admin role required!`);
        }
        return originalMethod.apply(this, args);
    };
}

class Dashboard {
    @adminOnly
    deleteUserAccount() {
        console.log("Account successfully wiped.");
    }
}

try {
    const panel = new Dashboard();
    panel.deleteUserAccount(); // This will throw an error because user is a 'guest'
} catch (err: any) {
    console.error(err.message);
}
console.log("*****************************************");

console.log("Example 04");
function catchError(originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
        try {
            const result = originalMethod.apply(this, args);
            // Handle if the returned result is a Promise
            if (result && typeof result.catch === "function") {
                return result.catch((err: any) => {
                    console.error(`[Async Error Captured in ${context.name}]:`, err.message);
                });
            }
            return result;
        } catch (err: any) {
            console.error(`[Sync Error Captured in ${context.name}]:`, err.message);
        }
    };
}

class Database {
    @catchError
    fetchRecord() {
        throw new Error("Connection timed out to database node.");
    }
}

const db = new Database();
db.fetchRecord(); // Gracefully logs the error instead of crashing the process
console.log("*****************************************");

console.log("Example 05");
function uppercase(originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    };
}

class Receipt {
    @uppercase
    getItemName() {
        return "espresso coffee";
    }
}

const item = new Receipt().getItemName();
console.log(item); // Logs: "ESPRESSO COFFEE"
