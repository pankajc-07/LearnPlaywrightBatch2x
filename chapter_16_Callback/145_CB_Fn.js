function cafe(item, callWhenTableisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("calling 9876543210");

}

cafe("Burger", callWhenTableisReady);

cafe("Pizza", function () {
    console.log("calling 8765432123");
})

cafe("Momos", () => {
    console.log("calling 3543543");
});
console.log("*******************************************");

//Examples for practice

console.log("Example 01");
function cafe02(food, callOnceReady) {
    console.log("Waiting......01");
    console.log("Waiting......02");
    console.log("Waiting......03");
    console.log(food);
    callOnceReady();
}

cafe02("Pizza and Burger", function () {
    console.log("You can enjoy the food");
})

cafe02("Cofee", () => {
    console.log("You can enjoy now");
})

