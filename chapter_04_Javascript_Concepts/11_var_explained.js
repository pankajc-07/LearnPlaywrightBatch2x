var a = 10; //Globle scope

console.log(a);

//var is function scoped

function printHello() {
    console.log("Hello the TestingAcademy!");

    var a = 20; // Local scope
    console.log(a);
    if (true) {
        var a = 30; // Local scope
        console.log(a);
    }
}

printHello();

var a = 40; // Globle scope
console.log(a);