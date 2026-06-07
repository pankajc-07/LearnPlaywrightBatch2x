/*Synchronous Callbacks
- Synchronous = runs immediately, line by line, top to bottom.  (UPI/IMPS)
- The program WAITS for it to finish before moving to the next line.

Every forEach, **map**, **filter** you've used — those are sync callbacks.
*/

let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {
    console.log("Test" + index + " => " + result);
});
console.log("****************************************");

function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

// Callback by ananomus function
test('Verify the login page is working', function () {
    console.log("Running TC01");
})

// Callback by arrow function
test('Verify the login page is working', () => {
    console.log("Running TC02");
})


