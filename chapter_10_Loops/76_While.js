let attempt = 0; // Init
while (attempt < 3) { // Condition
    console.log(attempt);
    attempt++; // Updation
}
console.log("***************************************");

let modi = 1;
while (modi <= 15) { // 1 to 15,Times -> 
    console.log("Modi will do 15+ years");
    modi++;
}
console.log("***************************************");

// Practice Examples
console.log("Example 01");

let age = 0;
while (age <= 18) {
    console.log("Age = " + age + " Not an Adult")
    age++
}
console.log("***************************************");

console.log("Example 02");

let num = 0;
while (num > 0) {
    console.log("The number is " + num)
    num++
}
console.log("***************************************");

console.log("Example 03");

let marks = 0;
while (marks <= 5) {
    console.log("Marks is = " + marks)
    marks++
}
console.log("***************************************");

console.log("Example 04");

// let marks01 = 0;
// while (marks01 < 10) {
//     console.log("Marks is = " + marks01)
//     // marks01++ // If we remove marks++, this will go in infinite loop
// }
console.log("***************************************");

console.log("Example 05");

let call = 0;
while (call <= 3) {
    console.log("Call");
    call++
}
console.log("***************************************");

console.log("Example 06");

let call01 = 1;
while (call01 <= 5) {
    if (call01 <= 3) {
        console.log("Call number = " + call01);
    } else {
        console.log("Do not call = " + call01)
    }
    call01++
}
console.log("***************************************");

console.log("Example 07");

let speed01 = 0;
while (speed01 <= 10) {
    if (speed01 < 6) {
        console.log("Average speed = " + speed01);
    } else {
        console.log("Over speed = " + speed01)
    }
    speed01++
}
