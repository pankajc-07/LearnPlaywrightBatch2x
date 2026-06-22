class Browser {
    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("starting the browser")
    }

    closeBrowser() {
        console.log("starting the browser")
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(chrome.isOpen);
console.log(firefox.isOpen);

chrome.startBrowser();
console.log("********************************************");

console.log("Example 01");
class Browser01 {
    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser01() {
        console.log(this.name + " starting the browser")
    }

    closeBrowser01() {
        console.log(this.name + " closing the browser")
    }
}

let chrome01 = new Browser01("Chrome");
let firefox01 = new Browser01("Firefox");

console.log(chrome01.isOpen);
console.log(firefox01.isOpen);

chrome01.startBrowser01();
chrome01.closeBrowser01();



