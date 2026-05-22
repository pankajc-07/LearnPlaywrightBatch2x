let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);
console.log("***************************************");

//Practice Examples

console.log("Example 01");

let num = 0;
do {
    console.log("Number is = " + num)
    num++;
} while (num <= 5);
console.log("***************************************");

console.log("Example 02");

let grade = 1;
do {
    console.log("This is Grade Example");
    console.log("And the Grade is = " + grade);
    grade++;
} while (grade < 0);
console.log("***************************************");

console.log("Example 03");

let loop = 0;
do {
    console.log("This code will run : " + loop)
    loop++
} while (loop <= 5);
