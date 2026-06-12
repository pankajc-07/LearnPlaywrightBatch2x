let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is delivered.Food is ready.")
    } else {
        reject("Order cancelled because of rain")
    }
})

console.log(order);
