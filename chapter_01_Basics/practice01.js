var a = 10;
var a = 20;
console.log(a);

let b = 100;
b = 200;
console.log(b);

const c = 1000;
// c = 2000;
console.log(c);
console.log("*************************************");


if(true){
    var p = 111;
    let q = 222;
    const r = 555;
   // console.log(p);
   // console.log(q);
   console.log(r);

}
console.log(p);
// let q = 333;
//console.log(q);
// q = 444;
//console.log(r);
console.log("*************************************");

let x = 10;
let i = "pankaj";
let j;
let k = null;
let m = true;
let n = 10.5;
let o = ".submit-btn"

console.log(typeof x);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof m);
console.log(typeof n);
console.log(typeof o);
console.log("*************************************");

const url = "https://www.thetestingacademy.com";
// url = "https://www.google.com";
let pageTitle = "Home Page";
pageTitle = "Dashboard";
console.log(url);
console.log(pageTitle);
console.log("*************************************");

let requiredFields = 5;
let filledFields = "5";
let isformValid = true;


console.log(requiredFields ===filledFields);

if(requiredFields === 5 && isformValid){
    console.log("Submit the form");
}
else{
    console.log("Form is not valid");
}
console.log("*************************************");

const userRole = "admin";
let accontStatus = "active";

if(userRole === "admin" && accontStatus === "active"){
    console.log("Access granted");
}else{
    console.log("Access denied");
}