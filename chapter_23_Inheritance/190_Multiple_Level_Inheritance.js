// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN] " + this.name);
    }
}
class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}
let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();
console.log("**************************************************");

// Practice Examples
console.log("Example 01");
/*
Example 1: Device => Computer => LaptopIdeal for practicing hardware/device configuration hierarchies.
*/
class Device {
    constructor(brand) {
        this.brand = brand;
    }
    powerOn() {
        console.log(`${this.brand} device is powring on`);
    }
}

class Computer extends Device {
    constructor(brand, ram) {
        super(brand);
        this.ram = ram;
    }
    bootOS() {
        console.log(`Booting system with ${this.ram} RAM`);
    }
}

class LaptopIdeal extends Computer {
    constructor(brand, ram, batteryLife) {
        super(brand, ram);
        this.batteryLife = batteryLife;
    }
    fold() {
        console.log("Folding the screen");
    }
}

let Laptop = new LaptopIdeal("Apple", "16 GB", "18 Hrs");
Laptop.powerOn();
Laptop.bootOS();
Laptop.fold();
console.log("**************************************************");

console.log("Example 02");
/*
Example 2: Account => SavingsAccount => PremiumSavingsPerfect for banking or subscription-tier access control systems.
*/
class Account {
    constructor(holderName) {
        this.holderName = holderName;
    }

    checkBalance() {
        console.log(`Checking balance for ${this.holderName}`);
    }
}

class SavingsAccount extends Account {
    calculateInterest() {
        console.log("Calculating interest rate");
    }
}

class PremiumSavings extends SavingsAccount {
    constructor() {
        super("VIP Customer"); // Hardcoded setup similar to AdminPage
    }

    conciergeSupport() {
        console.log("Connecting to dedicated support agent");
    }
}

let vipAcc = new PremiumSavings();
vipAcc.checkBalance(); // Grandparent method
vipAcc.calculateInterest(); // Parent method
vipAcc.conciergeSupport(); // Child method
console.log("**************************************************");

console.log("Example 03");
/*
Example 3: File => MediaFile => VideoFileA great exercise for systems dealing with general assets branching into specific formats.
*/
class File {
    constructor(fileName) {
        this.fileName = fileName
    }

    open() {
        console.log(`Opening file: ${this.fileName}`);
    }
}

class MediaFile extends File {
    play() {
        console.log("Playing media player...");
    }
}

class videoFile extends MediaFile {
    constructor(fileName, resolution) {
        super(fileName);
        this.resolution = resolution;
    }

    renderSubtitles() {
        console.log(`Rendering subtitles in ${this.resolution}`);
    }
}

let file01 = new videoFile("movie.mp4", "4K");
file01.open(); // Grandparent method
file01.play(); // Parent method
file01.renderSubtitles(); // Child method
console.log("**************************************************");

console.log("Example 04");
/*
Example 4: NetworkRequest => HttpRequest => SecureHttpRequest Simulates a protocol stack utility commonly used in API automation engines.
*/
class NetworkRequest {
    constructor(endPoint) {
        this.endPoint = endPoint;
    }

    connect() {
        console.log(`Connecting to ${this.endPoint}`);
    }
}

class HttpRequest extends NetworkRequest {
    sendPayload(data) {
        console.log(`Sending data: ${data}`);
    }
}

class SecureHttpRequest extends HttpRequest {
    // Constructor automatically passes arguments to super if omitted, 
    // but writing it explicitly clarifies the multi-level chain:
    constructor(endPoint) {
        super(endPoint);
    }
    encrypt() {
        console.log("Encrypting connection link secure...");
    }
}

let request01 = new SecureHttpRequest("api/v1/data");
request01.connect(); // Grandparent method
request01.encrypt(); // Child method
request01.sendPayload("{'id': 1}"); // Parent method
console.log("**************************************************");

console.log("Example 05");
/*
Example 5: UiElement => InputField => PasswordField Simulates a front-end component framework architecture (like automated WebElements).
*/
class UiElement {
    constructor(selector) {
        this.selector = selector;
    }

    focus() {
        console.log(`Focusing element: ${this.selector}`);
    }
}

class InputField extends UiElement {
    typeText(text) {
        console.log(`Typing test: ${text}`);
    }
}

class PasswordField extends InputField {
    constructor() {
        super("#password-input"); // Hardcoded initialization up the chain
    }

    maskInput() {
        console.log("Masking characters on screen");
    }
}

let field01 = new PasswordField();
field01.focus();
field01.typeText("secret123");
field01.maskInput();







