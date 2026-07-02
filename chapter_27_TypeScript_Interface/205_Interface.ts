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
console.log("*************************************************");

// Practice Examples
console.log("Example 01");
interface UserRegister {
    register(username: string, email: string): void;
    deleteUser(id: number): boolean;
    getUser: (id: number) => { id: number; username: string } | null;
}

const ananomusUser = {
    guestMode: true
}

const registration: UserRegister = {
    register: (username, email) => console.log(`Registered ${username} (${email})`),
    deleteUser: (id) => id > 0,
    getUser: (id) => id === 1 ? { id: 1, username: "Alice" } : null
}

console.log(registration);
console.log("*************************************************");

console.log("Example 02");
interface DataStorage {
    save(key: string, data: string): void;
    clear(): void;
    retetrive: (key: string) => string | undefined;
}

// Un-typed plain object
const fallbackConfig = {
    env: "production"
}

const loacalStorage: DataStorage = {
    save: (key, data) => console.log(`Saved ${data} under ${key}`),
    clear: () => console.log("Storage cleared"),
    retetrive: (key) => key === "token" ? "abc123" : undefined
}

console.log(loacalStorage);
console.log("*************************************************");

console.log("Example 03");
interface Logger {
    info(message: string): void;
    error(message: string, code: number): void;
    format: (msg: string) => string;
}

// Un-typed plain object
const systemStatus = {
    uptime: 3600
}

const consoleLogger: Logger = {
    info: (message) => console.log(`[INFO]: ${message}`),
    error: (message, code) => console.error(`[ERROR ${code}]: ${message}`),
    format: (msg) => msg.trim().toLowerCase()
}
console.log(consoleLogger);
console.log("*************************************************");

console.log("Example 04");
interface TaskManager {
    assign(taskId: number, developerId: number): void;
    complete(taskId: number): boolean;
    getSummary: () => { total: number; pending: number }; // Alternative syntax
}

// Un-typed plain object
const criticalAlert = {
    severity: "high"
}

const agileBoard: TaskManager = {
    assign: (tId, dId) => console.log(`Assigned task ${tId} to dev ${dId}`),
    complete: (tId) => tId % 2 === 0, // returns true if even ID
    getSummary: () => ({ total: 10, pending: 3 })
}

console.log(agileBoard);
console.log("*************************************************");

console.log("Example 05");
interface StringManipulator {
    capitalize(text: string): string;
    reverse(text: string): string;
    slugify: (text: string) => string; // Alternative syntax
}

// Un-typed plain object
const defaultLocale = {
    lang: "en-US"
}

const textUtils: StringManipulator = {
    capitalize: (text) => text.charAt(0).toUpperCase() + text.slice(1),
    reverse: (text) => text.split("").reverse().join(""),
    slugify: (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-")
}

console.log(textUtils);
