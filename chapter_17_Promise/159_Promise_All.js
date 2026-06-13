let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCashe = Promise.resolve("Cashe Ok");


Promise.all([checkAuth, checkDB, checkCashe]).then(function (results) {
    console.log("All the checks are fine!");
})
console.log("****************************************");

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("Ok")
]).then(function (r) {
    console.log(r);

}).catch(function (error) {
    console.log("Failed;", error);
})
console.log("****************************************");

Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed!"),
    Promise.resolve("Test C Passed!")
]).then(function (result) {
    result.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    })
})

// This is like test report
// you want to result for all tests
// not just stop at first failure
console.log("****************************************");


