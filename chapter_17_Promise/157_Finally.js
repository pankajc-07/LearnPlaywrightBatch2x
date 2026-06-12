let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;

    if (apiCall) {
        resolve({ "status": "Done" })
    } else {
        reject("Assertion Failed");
    }
});

testRun.then(function (data) {
    console.log(data);

}).catch(function (error) {
    console.log(error);

}).finally(function () {
    // This code will be always excuted anyHow.
    console.log("I will be Executed anyHow!");

})