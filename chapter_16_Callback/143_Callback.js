function print() {
    console.log("Normal Function is called");
}

function placeOrder(items, pramodCallback) {
    console.log("Hi, You order is placed: " + items);
    pramodCallback();
}
console.log("*******************************************");

// First Way
placeOrder("Pizza", print);
console.log("*******************************************");

// Sencond Way Ananomus function
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});
console.log("*******************************************");

// Third Way - Arrow Function
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});
console.log("*******************************************");

//Examples for practice

console.log("Example 01");
function shopingItems(items, callback) {
    console.log(`Shoping for ${items} is done!`);
    callback();
}

shopingItems("Screen", function () {
    console.log("This is an output from ananomus function");
})

shopingItems("Mouse", () => {
    console.log("This is an output from Arrow function");
})

function function01() {
    console.log("This is an output from seprate function");
}

shopingItems("Speakers", function01)
console.log("*******************************************");

console.log("Example 02");

function traveling(city, calling) {
    console.log("I visited: " + city);
    calling();
}

traveling("Hydrabad", () => {
    console.log(`This was nice experience in `);
})

traveling("Banglor", function () {
    console.log("The city was very nice");

})