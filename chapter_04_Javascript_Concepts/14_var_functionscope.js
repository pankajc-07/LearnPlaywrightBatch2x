var a = 10; //Globle scope
console.log(a);

//Define the function 

function printHello() {

    console.log("Hello the TestingAcademy!");

    var a = 20; // Local scope
    console.log(a);

    if (true) {
        var a = 30; // Local scope
        console.log(a);
    }

    console.log("F -> " + a);
}

console.log("G -> " + a);

printHello();