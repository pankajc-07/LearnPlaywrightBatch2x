function goToRelativeHouse() {
    console.log('Hi');
    return "Hello";
}

let relative = goToRelativeHouse();
console.log(relative);
console.log("**************************************");

// Practice Examples
console.log("Example 01");
function fun01() {
    console.log("This is a function with no parameter and return");
    return "Return 01";
}

fun01();

let return01 = fun01();
console.log(return01);
console.log("**************************************");

// Practice Examples
console.log("Example 01");
/*
Problem 1: Dynamic URL Navigator
Instead of hardcoding URLs across dozens of tests, you want a utility function that routes the browser
to different sections of your application (e.g., /dashboard, /settings, /billing)
based on what the test requires.

Task: Write a function named MapsToModule. It should accept a single string parameter (modulePath).
Inside, simulate appending that path to a base URL (https://sandbox.app.com) and
log the final navigation path. It should not return anything.
*/
function MapsToModule(modulePath) {
    const baseUrl = "https://sandbox.app.com";
    const fullUrl = `${baseUrl}${modulePath}`;
    console.log(`Playwright: Navigating browser to -> ${fullUrl}`);
}
MapsToModule("/dashboard");
MapsToModule("/settings");
console.log("**************************************");

console.log("Example 02");
/*
Problem 2: Parameterized Login Form Filler
You need a quick helper function to fill out a standard login form.
The function needs to accept data dynamically so you can test valid users, invalid users,
and locked-out users.

Task: Create a function named fillLoginForm that takes two parameters: username and password.
Inside, simulate locating the respective UI fields (#username and #password) and
filling them with the provided arguments.
*/
function fillLoginForm(username, password) {
    // console.log("UserName is : " + `${username}`);
    // console.log("Pssword is : " + `${password}`);
    console.log(`--- UI Action: Filling Login Form ---`);
    console.log(`Typing "${username}" into #username field.`);
    console.log(`Typing "********" into #password field.`);

}
// fillLoginForm("Pankaj", "1234");
fillLoginForm("admin_user", "Secret123!");
fillLoginForm("locked_out_user", "WrongPass");
console.log("**************************************");

console.log("Example 03");
/*
Problem 3: Custom Step Logger for Test Reporting
To make your Playwright HTML reports or terminal logs easier to read,
you want a standardized logging format that prints custom step descriptions wrapped in visual markers.

Task: Write a function named logStep. It should accept a string parameter named message.
The function should output the message to the console surrounded by brackets and
a timestamp placeholder (e.g., [STEP - 12:00 PM]: <your message>).
*/
function logStep(message) {
    console.log(`[PLAYWRIGHT STEP]: ➡️ ${message.toUpperCase()}`);
}

logStep("Clicking the checkout button");
logStep("Waiting for network to go idle");
console.log("**************************************");

console.log("Example 04");
/*
Problem 4: Selecting a Dropdown Option by Text
On an administrative portal, there are multiple dropdown selectors.
You need a clean, reusable way to select a specific option from a dropdown element
based on whatever text the test demands.

Task: Create a function named selectDropdownOption.
It should take two parameters: dropdownSelector (the identifier for the element) and
optionText (the value you want to select). Simulate interacting with the dropdown using these inputs.
*/
function selectDropdownOption(dropdownSelector, optionText) {
    console.log(`Interacting with element: ${dropdownSelector}`);
    console.log(`Selecting the choice "${optionText}" from the dropdown list.`);
}
selectDropdownOption("#country-select", "United States");
selectDropdownOption(".role-dropdown", "Administrator");







