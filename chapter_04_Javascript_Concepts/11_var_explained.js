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

// var == trump, flipper, dual faced, no trust worthy

console.log("******************************")

var p = "1000";
console.log(p);

function function01() {
    var p = "2000";
    console.log(p);

    if (true) {
        var p = "3000";
        p = "4000"
        console.log("This is from if block inside the function : " + p);
    }
    console.log("This is outside if block inside the function : " + p);
}

var p = "5000";
console.log(p);

function01();