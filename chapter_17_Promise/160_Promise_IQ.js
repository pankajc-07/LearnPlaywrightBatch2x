let p = new Promise(function (resolve, reject) {
    resolve(42);
});

p.then(function (value) {
    console.log("Answer : ", value);
})
console.log("****************************************");

let p = new Promise(function (resolve, reject) {
    reject("Something broke!");
});

p.catch(function (err) {
    console.log("Caught: ", err);
})
console.log("****************************************");

let p = Promise.resolve(5);

p.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result: ", val);
})
console.log("****************************************");

Promise.resolve(1)
    .then(function (val) {
        console.log("This is from 1st: ", val);
        return val + 1;
    })
    .then(function (val) {
        console.log("This is from 2nd: ", val);
        return val + 1;
    })
    .then(function (val) {
        console.log("This is from 3rd: ", val);
    });
console.log("****************************************");

Promise.resolve("Start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");
    })
    .then(function () {
        console.log("This will not run");

    })
    .catch(function (error) {
        console.log("Caught: ", error.message);
    });
console.log("****************************************");

Promise.reject("Test Failed")
    .then(function (data) {
        console.log("Data: ", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });
console.log("****************************************");

Promise.resolve("Quick Win!").then(function (msg) {
    console.log(msg);

});

Promise.reject("Quick loss!").catch(function (msg) {
    console.log(msg);

});
console.log("****************************************");

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (result) {
    console.log(result);
})
console.log("****************************************");

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3])
    .then(function (r) { console.log("All: ", r); })
    .catch(function (err) { console.log("Stopped: ", err); });
console.log("****************************************");

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        // console.log(r);

        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " => " + val);
    })
})
console.log("****************************************");

