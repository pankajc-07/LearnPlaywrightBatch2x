class BasePage {

    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Opening the page ");
    }

    close() {
        console.log("Closing the page ");
    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage();
page.open();
page.close();
console.log(page.pageName);

console.log("===========");

const page01 = new LoginPage("Page01");
page.open();
page.close();
console.log(page01.pageName);
console.log("**************************************************");

// Practice Examples
console.log("Example 01");
/*
Example 1: BaseComponent $\rightarrow$ HeaderComponentGreat for practicing how reusable UI pieces
(like headers or footers) inherit from a generic component class.
*/
class BaseComponent {
    constructor(eleementLocator) {
        this.eleementLocator = eleementLocator;
    }

    verifyVisible() {
        console.log("Component is visible");
    }
}

class HeaderComponent extends BaseComponent {
    // Inherits constructor and methods automatically
}

const header = new HeaderComponent("#main-header");
header.verifyVisible();
console.log(header.eleementLocator);
console.log("**************************************************");

console.log("Example 02");
/*
Example 2: BaseTest $\rightarrow$ LoginTestUseful for structuring test automation suites
where setup and teardown are shared.
*/

class BaseTest {
    setup() {
        console.log("Launching browser...");
    }

    teardown() {
        console.log("Closing browser...");
    }
}

class Logintest extends BaseTest {

}

const myTest = new Logintest();
myTest.setup();
myTest.teardown();
console.log("**************************************************");

console.log("Example 03");
/*
Example 3: ApiRequest $\rightarrow$ GetRequestPerfect for understanding how backend API testing
utilities can share configuration.
*/
class APIRequest {

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    setHeader() {
        console.log("Setting default headers");
    }
}

class GetRequest extends APIRequest {

}

const getCall = new GetRequest("https://api.example.com");
getCall.setHeader(); // Output: Setting default headers
console.log(getCall.baseURL); // Output: https://api.example.com
console.log("**************************************************");

console.log("Example 04");
/*
Example 4: Logger $\rightarrow$ FileLoggerA classic infrastructure example
where a general logging strategy is inherited by a specific type of logger.
*/
class Logger {
    constructor(level) {
        this.level = level;
    }

    log(message) {
        console.log(`[${this.level}]: ${message}`);
    }
}

class FileLogger extends Logger {

}

const logger = new FileLogger("Debug");
logger.log("Testing connections")
console.log("**************************************************");

console.log("Example 04");
/*
Example 5: BaseElement $\rightarrow$ ButtonElementSimulates a low-level framework wrapping
interaction wrapper classes around standard HTML elements.
*/
class BaseElement {
    constructor(cssSelector) {
        this.cssSelector = cssSelector;
    }

    click() {
        console.log("Clicking element at: " + this.cssSelector);
    }
}

class ButtonElement extends BaseElement {

}

const submitBtn = new ButtonElement(".submit-btn");
submitBtn.click();


