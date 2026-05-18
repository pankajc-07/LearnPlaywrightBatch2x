//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);
console.log("**************************************");

// Nullish Coalescing Operator (??)
// It is used to provide a default value when the left-hand side operand is null or undefined.
let amul = null;
// let amul = "Amul Milk";
let isMilk = amul ?? "Chitale milk";
console.log(isMilk);
console.log("**************************************");

let amul2;
let isMilk2 = amul2 ?? "Chitale milk";
console.log(isMilk2);
console.log("**************************************");

let amul3 = undefined;
let isMilk3 = amul3 ?? "Chitale milk";
console.log(isMilk3);
console.log("**************************************");

let amul4 = "Amul Milk";
let isMilk4 = amul4 ?? "Chitale milk";
console.log(isMilk4);

