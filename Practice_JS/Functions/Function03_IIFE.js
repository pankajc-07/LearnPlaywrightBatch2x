// Immediately Invoked Functions Expression (IIFE)
function name() {
    console.log("Hi");
};
name();
console.log("************************************");

(function () {
    console.log("Hi");
})();
console.log("************************************");

(function () {
    console.log("Staging");
})();
console.log("************************************");

(() => {
    console.log("Setup Completed!")
}
)();




