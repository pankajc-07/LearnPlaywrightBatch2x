function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pankaj");

let result = greetByName("Rajesh");
console.log(result);
console.log("*****************************");

function begger(money) {
    console.log("Thanks", money);
}

begger(2000);

let returnMesomething = begger(100);
console.log(returnMesomething);
console.log("**************************************");

// Practice Examples
console.log("Example 01");
function fun01(param) {
    console.log("This is a function with parameter and no return : ", param);
}

fun01("Prameter 01");

let param02 = fun01("Parameter 02");
console.log(param02);