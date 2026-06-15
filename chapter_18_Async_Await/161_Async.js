async function testapi() {
    try {
        let result = await Promise.reject("503 reject");
    }
    catch (error) {
        console.log('Error', error);
    }
    finally {
        console.log("Clean up!!")
    }
}

testapi();
console.log("*********************************************");

//Practice Examples
console.log("Example 01");

async function test01() {
    try {
        let result = await Promise.resolve("200 Pass");
        console.log("Pass");
    }
    catch (error) {
        console.log("Error", error);
    }
    finally {
        console.log("This will run any how!");
    }
}

test01();
console.log("*********************************************");

console.log("Example 02");

async function test02() {
    try {
        let result = await Promise.reject("400 error");
        console.log("Pass");
    }
    catch (err) {
        console.log("Error", err);
    }
    finally {
        console.log("Test completed here!");
    }
}

test02();
console.log("*********************************************");
async function test03() {
    try {
        let result01 = await Promise.reject("404 Error found");
    }
    catch (error) {
        console.log("Error: ", error);
    }
    finally {
        console.log("Test completion!");
    }
}

test03();

console.log("*********************************************");

console.log("Example 03");
/*
1. Simulating a Network Timeout
Scenario: You attempt to fetch data from a server, but it times out.
You need to catch the timeout error and log that the operation completed.
*/
async function fetchUserDashboard() {
    try {
        console.log("Fetching user dashboard...");
        // Simulating a network timeout rejection
        let data = await new Promise((_, reject) =>
            setTimeout(() => reject("Error: Request timed out (408)"), 2000)
        );
    } catch (error) {
        console.log("Catch block triggered:", error);
    } finally {
        console.log("Finally block: Hide loading spinner on the UI.");
    }
}

fetchUserDashboard();
console.log("*********************************************");

console.log("Example 04");
/*
2. Reading a Local File (Simulated)
Scenario: You attempt to open and read a system file.
If the file doesn't exist, an error is caught, but you must close the file stream handler regardless of success or failure.
*/
async function processReportFile() {
    let fileStreamOpen = true;
    try {
        console.log("Opening report.csv...");
        // Simulating a file-not-found error
        let content = await Promise.reject("ENOENT: no such file or directory");
    } catch (error) {
        console.log("Catch block triggered: Cannot read file ->", error);
    } finally {
        fileStreamOpen = false;
        console.log("Finally block: File stream safely closed. Resource freed.");
    }
}

processReportFile();
console.log("*********************************************");

console.log("Example 05");
/*
Database Connection and Query
Scenario: Your application connects to a database to run a query.
If the query fails due to a syntax issue, you catch the error,
but you must disconnect from the database server in the finally block to prevent memory leaks.
*/
async function executeDatabaseQuery() {
    try {
        console.log("Connecting to Database...");
        console.log("Running Query: SELECT * FROM secure_vault;");
        // Simulating an unauthorized access error
        let rows = await Promise.reject("SQLException: Access denied for user 'guest'");
    } catch (error) {
        console.log("Catch block triggered: Query failed ->", error);
    } finally {
        console.log("Finally block: Database connection closed successfully.");
    }
}

executeDatabaseQuery();
console.log("*********************************************");

console.log("Example 06");
/*
4. Validating User Input
Scenario: Processing a payment form where the user forgot to fill out the credit card field.
The promise rejects because of invalid data, and the finally block clears the sensitive form fields.
*/
async function processPayment(paymentDetails) {
    try {
        console.log("Validating payment details...");
        if (!paymentDetails.cardNumber) {
            await Promise.reject("ValidationError: Card number is required.");
        }
    } catch (error) {
        console.log("Catch block triggered:", error);
    } finally {
        console.log("Finally block: Sensitive input fields cleared from memory.");
    }
}

processPayment({ amount: 50 }); // Missing cardNumber
console.log("*********************************************");

console.log("Example 07");
/*
5. Third-Party API Gateway (502 Bad Gateway)
Scenario: Your code hits an external payment gateway (like Stripe or PayPal).
The gateway returns a 502 Bad Gateway error. You catch the error to trigger a fallback system,
and use finally to log the transaction attempt timestamp.
*/
async function hitPaymentGateway() {
    try {
        console.log("Contacting payment gateway...");
        // Simulating a 502 server error
        let response = await Promise.reject("502 Bad Gateway");
    } catch (error) {
        console.log("Catch block triggered: External service is down ->", error);
        console.log("Switching traffic to backup payment gateway...");
    } finally {
        console.log(`Finally block: Transaction attempt logged at ${new Date().toISOString()}`);
    }
}

hitPaymentGateway();



