console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 2000);

console.log("Test 3: Moving to next last");
console.log("*******************************************************");

// Practice Examples
console.log("Example 01");

console.log("This is Test 01");

setTimeout(() => {
    console.log("This is Test 02, from timeout function");
}, 2000)

console.log("This is Test 03");
console.log("*******************************************************");

console.log("Example 02");

console.log("Test 01");
setTimeout(function () {
    console.log("Test 02: from timeOut function");
}, 2000);

console.log("Test 03");